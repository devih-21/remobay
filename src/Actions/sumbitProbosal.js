import baseURL from './baseURL';
import axios from 'axios';

let upworkUserID = "601b17526334d955348ecebe";
let upworkJobID = "6018b31fb872e704e4657091";

export async function postProposal(userID, jobID,bid,upworkFees,received,coverLetter) {
    let payload;
    try {
      let response = axios.post(`${baseURL}/api/job/createproposal`, {userId: userID, jobId: jobID , bid ,upworkFees,received,coverLetter});
      payload = (await response).data
      console.log("jhjhj",payload);
    }
    catch (err) {
      console.log(err);
    }
  
    return {
      type: "POST_PROPOSAL",
      payload
    }
  }