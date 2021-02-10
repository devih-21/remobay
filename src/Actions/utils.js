import baseURL from './baseURL';
import axios from 'axios';

export async function uploadMultipleFiles (file) {
  let payload;
  try {
    let response = await axios.post(`${baseURL}/api/job/multiple-upload`, file);
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