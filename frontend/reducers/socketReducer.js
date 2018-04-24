import { SET_SOCKET } from '../actions/types';


const initialState = {
  socket: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
  case SET_SOCKET:
    let newState = Object.assign({}, state, {socket: action.socket})
    return newState;
  default:
    return state;
  }
}
