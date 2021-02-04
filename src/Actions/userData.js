import baseURL from './baseURL';
import axios from 'axios';


export async function getProfileData(id = null) {
  let payload = null
  try {
    let response = await fetch(`${baseURL}/${id}`);
    payload = response.body;
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "PROFILE_DATA",
    payload
  }
}

export async function logIn (user) {
  let payload

  try {
    let response = await axios.post(`${baseURL}/api/user/login`, user)
    payload = response.data
    console.log(payload);
    localStorage.setItem('token', payload.token);
    localStorage.setItem('id', payload.user._id);
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "LOGIN",
    payload
  }
}

export async function checkLoggingStatus (token) {
  return {
    type: "CHECK_LOGGING_STATUS",
    token
  }
}

export async function checkProfileOwner (userID, profileID) {
  return {
    type: "CHECK_PROFILE_OWNER",
    userID,
    profileID
  }
}