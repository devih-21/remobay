export function userReducer (state = {}, action) {
  switch(action.type) {
    case "PROFILE_DATA": {
      return {...state, profile: action.payload};
    }
    case "LOGIN": {
      console.log(action.payload)
      return {...state, userID: action.payload.user._id, userData: action.payload}
    }
    case "CHECK_LOGGING_STATUS": {
      if (action.token) {
        console.log("Hi user, You're logged in!");
        return {...state, isLoggedIn: true};
      } else {
        console.log("Hi guest, Register now!");
        return {...state, isLoggedIn: false};
      }
    }
    case "CHECK_PROFILE_OWNER": {
      let profileOwner;
      if (action.userID === action.profileID) {
        profileOwner = true;
      } else {
        profileOwner = false;
      }
      return {...state, isProfileOwner: profileOwner};
    }
    default: return state;
  }
}