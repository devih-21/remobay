import baseURL from './baseURL';
import axios from 'axios';

export async function uploadMultipleFiles (formData, userId) {
  let payload;
  try {
    let response = await axios.post(`${baseURL}/api/job/saveimage`, formData, {headers: {'Content-Type': 'multipart/form-data', 'userid':userId}});
    payload = response;
    console.log(payload);
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "UPLOAD_MULTIPLE_FILES",
    payload
  }
}