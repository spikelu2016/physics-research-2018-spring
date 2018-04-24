import userReducer from './userReducer';
import socketReducer from './socketReducer';
import chatReducer from './chatReducer';

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  chatReducer,
  userReducer,
  socketReducer
});

export default rootReducer;
