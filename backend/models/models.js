const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const userSchema = mongoose.Schema({
  userType: String,
  isModal: Boolean,
  firstname:{
    type: String,
    required: true
  },
  lastname:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User
}
