const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const userSchema = mongoose.Schema({
  userType: String,
  isModal: Boolean,
  firstname:{
    type: String,
    required: true
  },
  username:{
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
  },
  profilepic: {
    type: String,
    required: true
  }
});

const chatSchema = mongoose.Schema({
  chatRoomName:{
    type: String,
    required: true
  },
  onlineUsers:[]
});

const User = mongoose.model('User', userSchema);
const Chat = mongoose.model('Chat', chatSchema);


module.exports = {
  User,
  Chat
}
