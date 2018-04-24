import { SET_USER, SET_SOCKET, ADD_NEW_MESSAGE, SET_ALL_ONLINE_USERS, ADD_NEW_ONLINE_USER} from './types';

export function setUser(user) {
  return {
    type: SET_USER,
    user
  }
}

export function addNewMessage(newMessage) {
  return {
    type: ADD_NEW_MESSAGE,
    newMessage
  }
}

export function setAllOnlineUsers(chat) {
  return {
    type: SET_ALL_ONLINE_USERS,
    chat
  }
}

export function addNewOnlineUser(newOnlineUser) {
  return {
    type: ADD_NEW_ONLINE_USER,
    newOnlineUser
  }
}

export function setSocket(socket) {
  return {
    type: SET_SOCKET,
    socket
  }
}
