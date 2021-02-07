import { combineReducers } from 'redux';
import { userReducer } from './userData';
import { jobPostReducer } from './jobPost';
import { utilsReducer } from './utils';
import {postProposalReducer} from './postProposal'

export default combineReducers({
  userReducer,
  jobPostReducer,
  utilsReducer,
  postProposalReducer,

})