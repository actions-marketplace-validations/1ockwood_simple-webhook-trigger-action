import core from '@actions/core';
import fetch from 'node-fetch';

async function run(){
  try {
    // get action inputs
    const url = core.getInput('webhook-url', { required: true });
    const method = core.getInput('webhook-method');
    // make the fetch request
    const response = await fetch(url, { method: method });
    // throw an error if request is not successful
    if (!response.ok) throw new Error(`Webhook was not triggered successfully (status code: ${response.status})`);
    // log status info and response body
    core.info(`Webhook triggered successfully (status code: ${response.status})`);
  } catch (error) {
    // log error message and set a failing exit code
    core.setFailed(error);
  }
}

run();
