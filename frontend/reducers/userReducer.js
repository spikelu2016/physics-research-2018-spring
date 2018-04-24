import { SET_USER } from '../actions/types';


const initialState = {
  user: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
  case SET_USER:
    var newState = Object.assign({}, state, {user: action.user})
    return newState
  default:
    return state;
  }
}
