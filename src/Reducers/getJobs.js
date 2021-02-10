export function getJobsReducer(state = {}, action) {
  switch (action.type) {
    case "GET_ALL_JOBS": {
      return { ...state, getJobs: action.payload };
    }
    case "GET_A_JOB": {
      return { ...state, getJob: action.payload };
    }
    case "GET_CLIENT_JOBS": {
      return { ...state, getClientJobs: action.payload };
    }
    case "GET_CLIENT_JOB_DATA": {
      console.log(action.payload)
      return { ...state, getClientJobData: action.payload };
    }
    default:
      return state;
  }
}
