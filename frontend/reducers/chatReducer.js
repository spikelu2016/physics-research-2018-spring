import { ADD_NEW_MESSAGE, SET_ALL_ONLINE_USERS, ADD_NEW_ONLINE_USER } from '../actions/types';


const initialState = {
  messages: [],
  onlineUsers: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_ONLINE_USER:
      var newState = Object.assign({}, state, {
        onlineUsers: state.onlineUsers.concat(action.newOnlineUser)
      })
      return newState
    case SET_ALL_ONLINE_USERS:
      var newState = Object.assign({}, state, {
        onlineUsers: state.onlineUsers.concat(action.chat.onlineUsers)
      })
      return newState
    case ADD_NEW_MESSAGE:
      var newState = Object.assign({}, state, {
        messages: state.messages.concat(action.newMessage)
      })
      return newState
    default:
      return state;
  }
}
