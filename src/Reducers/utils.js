export function utilsReducer (state = {}, action) {
  switch (action.type) {
    case "UPLOAD_MULTIPLE_FILES": {
      return {...state, uploadedFiles: action.payload}
    }


    default: return state;
  }
}