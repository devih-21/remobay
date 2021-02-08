import { combineReducers } from 'redux';
import { userReducer } from './userData';
import { jobPostReducer } from './jobPost';
import { utilsReducer } from './utils';
import { getJobsReducer } from './getJobs';

export default combineReducers({
  userReducer,
  jobPostReducer,
  utilsReducer,
  getJobsReducer

})