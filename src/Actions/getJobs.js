import baseURL from "./baseURL";
import axios from "axios";
export async function getAllJobs(userId) {
  let payload;
  let data = {
    userId: userId,
  };
  try {
    let response = await axios
      .post(`${baseURL}/api/job/getalljobs`, data)
      .then((response) => {
        if (response.data.length > 0) {
          payload = response.data;
        } else {
          payload = null;
        }
        console.log(payload)
      });
  } catch (err) {
    console.log(err);
  }
  return {
    type: "GET_ALL_JOBS",
    payload,
  };
}
export async function getOneJob(jobId, userId) {
  const data = {
    userId: userId,
    jobId: jobId,
  };
  let payload;
  try {
    let response = await axios
      .post(`${baseURL}/api/job/getonejob`, data)
      .then((response) => {
        if (response.data.length > 0) {
          payload = response.data;
        } else {
          payload = null;
        }
      });
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "GET_A_JOB",
    payload,
  };
}
export async function getClientJobs(jobId, userId) {
  const data = {
    userId: userId,
    jobId: jobId,
  };
  let payload;
  try {
    let response = await axios
      .get(`${baseURL}/api/job/getclientjobs`)
      .then((response) => {
        if (response.data.length > 0) {
          payload = response.data;
        } else {
          payload = null;
        }
      });
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "GET_CLIENT_JOBS",
    payload,
  };
}
