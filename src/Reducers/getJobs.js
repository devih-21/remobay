export function getJobsReducer(state = {}, action) {
  switch (action.type) {
    case "GET_ALL_JOBS": {
      console.log(action.payload)
      return { ...state, getJobs: action.payload };
    }
    case "GET_A_JOB": {
      return { ...state, getJob: action.payload };
    }
    case "GET_CLIENT_JOBS": {
      return { ...state, getClientJobs: action.payload };
    }
    default:
      return state;
  }
}
