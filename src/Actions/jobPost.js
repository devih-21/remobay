import baseURL from './baseURL';
import axios from 'axios';

export async function saveJob (job) {
  let payload;
  try {
    let response = await fetch(`${baseURL}/api/job/savejob`, {method: "POST", body: JSON.stringify(job)});
    payload = await response.json();
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "SAVE_JOB",
    payload
  }
}

export async function saveJobTitle (postName, category) {
  let payload;
  try {
    let response = await fetch(`${baseURL}/api/job/saveTitle`,
    {method: "POST", body: JSON.stringify({postName, category})});
    payload = await response.json();
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "SAVE_JOB_TITLE",
    payload
  }
}

export async function saveJobDescription (description) {
  let payload;
  try {
    let response = await fetch(`${baseURL}/api/job/saveDescription`,
    {method: "PATCH", body: JSON.stringify({description})});
    payload = await response.json();
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "SAVE_JOB_DESCRIPTION",
    payload
  }
}

export async function saveJobDetails (details) {
  let payload;
  try {
    let response = await fetch(`${baseURL}/api/job/saveDetails`,
    {method: "PATCH", body: JSON.stringify({details})});
    payload = await response.json();
  }
  catch (err) {
    console.log(err);
  }
}

export async function saveJobExpertise (expertise) {
  let payload;
  try {
    let response = await fetch(`${baseURL}/api/job/saveExpertise`,
    {method: "PATCH", body: JSON.stringify({expertise})});
    payload = await response.json();
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "SAVE_JOB_EXPERTISE",
    payload
  }
}



export function checkJobPostTitle (title) {
  return {
    type: "CHECK_JOB_POST_TITLE",
    title
  }
}

export function setJobPostProgress (progress = 0) {
  return {
    type: "SET_JOB_POST_PROGRESS",
    progress
  }
}