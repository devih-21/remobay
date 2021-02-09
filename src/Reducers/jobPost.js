export function jobPostReducer (state = {}, action) {
  switch (action.type) {
    case "SAVE_JOB": {
      return {...state, savedJob: action.payload}
    }

    case "CHECK_JOB_POST_TITLE": {
      if (action.title.length < 1) {
        return {...state, jobPostTitleValid: false}
      } else return {...state, jobPostTitleValid: true}
    }

    case "SET_JOB_POST_PROGRESS": {
      return {...state, jobPostProgress: action.progress}
    }


    default: return state;
  }
}