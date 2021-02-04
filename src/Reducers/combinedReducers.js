import { combineReducers } from 'redux';
import { userReducer } from './userData';
import { jobPostReducer } from './jobPost';
import { utilsReducer } from './utils';

export default combineReducers({
  userReducer,
  jobPostReducer,
  utilsReducer
})