const express = require('express');
const router = express.Router();
const { User } = require('./models/models');
const util = require('util');
const bcrypt = require('bcrypt');

module.exports = function(passport) {

  // POST registration page
  router.post('/register', function(req, res) {
    req.checkBody('firstname', 'Firstname cannot be empty').notEmpty();
    req.checkBody('username', 'Username cannot be empty').notEmpty();
    req.checkBody('lastname', 'Lastname cannot be empty').notEmpty();
    req.checkBody('email', 'Invalid email').isEmail();
    req.checkBody('password', 'Lastname cannot be empty').notEmpty();
    req.checkBody('profilepic', 'profilepic cannot be empty').notEmpty();


    req.getValidationResult()
    .then(function(result){
      if (!result.isEmpty()) { // Error in the validations above
        res.json({
          error: result.array()
        });
        return;
      }

      User.findOne({email: req.body.email})
      .then(function(foundUser){
        if(foundUser){
          // throw new Error('email is taken');
          throw [{
            'param': 'email',
            'msg': 'Email is taken'
          }];
        } else {
          const saltRounds = 10;
          const hash = bcrypt.hashSync(req.body.password, saltRounds);

          var user = new User({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            profilepic: req.body.profilepic,
            password: hash
          });

          return user.save()
        }
      })
      .then(function(savedUser){
        req.login(savedUser, function(err) {
          if (err) {
            console.log('Error in logging in user after registration', err);
            res.json({
              error: [{param: 'email', msg: 'Error in logging in user after registration'}]
            })
          } else {
            res.json({
              error: null,
              response: savedUser
            })
          }
        });

      })
      .catch(function(error){
        console.log('error', error);
        res.json({
          error: error
        })
      })
    })
  });

  // POST Login page
  router.post('/login', passport.authenticate('local', {'failureRedirect': '/api/failure'} ), function(req, res) {
    var responseUser = Object.assign({}, req.user)
    var responseUser = responseUser._doc;
    delete responseUser.password;
    res.json({
      error: null,
      response: responseUser
    });
  });

  router.get('/failure', function(req, res) {
    res.json({
      error: 'Incorrect username or password'
    });
  });


  router.get('/checkLogin', function(req, res) {
    var responseUser = null;
    if(req.user) {
       responseUser = Object.assign({}, req.user)
       responseUser = responseUser._doc;
      delete responseUser.password;
    }

    res.json({
      loggedIn: !!req.user,
      user: responseUser
    });
  })


  // GET Logout page
  router.get('/logout', function(req, res) {
    req.logout();
    res.json({logout: true})
  });

  return router;
};
