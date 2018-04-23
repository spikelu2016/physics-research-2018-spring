const express = require('express');
const router = express.Router();
const auth = require('./auth');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const { User } = require('./models/models');
const LocalStrategy = require('passport-local');
const expressValidator = require('express-validator')

// authentication

router.use(bodyParser.json());

router.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      ,root = namespace.shift()
      ,formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
    };
  }
}));

router.use(cookieParser());
router.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true }));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
  // Find the user with the given username
  User.findOne({ email: username }, function (err, user) {
    // if there's an error, finish trying to authenticate (auth failed)
    if (err) {
      console.log(err);
      return done(err);
    }
    // if no user present, auth failed
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    if (bcrypt.compareSync(password, user.password)) {
      // auth has has succeeded
      return done(null, user);
    } else {
      return done(null, false, { message: 'Incorrect password.' });
    }
  });
}));

router.use(passport.initialize());
router.use(passport.session());

router.use('/', auth(passport));

router.use('/wakemydyno.txt', (req, res) => {
  res.sendFile(__dirname + '/wakemydyno.txt')
})

module.exports = router;
