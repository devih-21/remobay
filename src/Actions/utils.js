import baseURL from './baseURL';
import axios from 'axios';

export async function uploadMultipleFiles (fileName) {
  let payload;
  try {
    let response = await axios.post(`${baseURL}/api/job/multiple-upload`, null, {headers: {name: fileName}});
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