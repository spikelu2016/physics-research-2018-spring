const express = require('express');
const router = express.Router();
const auth = require('./auth');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const { User } = require('./models/models');
const { Chat } = require('./models/models');
const LocalStrategy = require('passport-local');
const expressValidator = require('express-validator');
const bcrypt = require('bcrypt');

// authentication

var userID = null;

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
    usernameField: 'username',
    passwordField: 'password'
  },
  function(username, password, done) {
  // Find the user with the given username
  User.findOne({ username: username }, function (err, user) {
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

// router.post('/deleteOnlineUser', function(req, res) {
//     if (userID !== null) {
//       Chat.findOne({ chatRoomName: 'public' }, function (err, chat) {
//         if (err) {
//           console.log(err);
//         }
//         console.log("i am here");
//         if (chat) {
//           for (var i = 0; i < chat.onlineUsers.length; i++) {
//             var onlineUser = chat.onlineUsers[i];
//             console.log("onlineUser._id: " + onlineUser._id);
//             console.log("userID: " + userID);
//             if (onlineUser._id === userID) {
//               chat.onlineUsers[i] = null;
//             }
//           }
//
//           var newOnlineUsers = [];
//
//           for (var i = 0; i < chat.onlineUsers.length; i++) {
//             var onlineUser = chat.onlineUsers[i]
//             if (onlineUser) {
//               newOnlineUsers.push(onlineUser);
//             }
//           }
//
//           chat.onlineUsers = newOnlineUsers;
//
//           chat.save();
//         }
//       })
//     }
// })

router.post('/addNewOnlineUser', function(req, res) {
  userID = req.session.passport.user;
  Chat.findOne({ chatRoomName: 'public' }, function (err, chat) {
    if (err) {
      console.log(err);
    }

    if (chat) {
      chat.onlineUsers.push(req.body);
      chat.save((err, chat) => {
        if(err){
          console.log("Error saving newChat to database:", err);
        } else {
          res.json({
            error: null,
            response: chat
          });
        }
      });
    } else {
      var newChat = new Chat({
        chatRoomName: 'public',
        onlineUsers:[req.body]
      });


      newChat.save((err, newChat) => {
        if(err){
          console.log("Error saving newChat to database:", err);
        } else {
          res.json({
            error: null,
            response: newChat
          });
        }
      });

    }
  })
})

module.exports = router;
