/**
 *
 * This app is intended to be run periodically (eg. by a cron job). It acts as the ETL
 * component of our app, and is responsible for the following functionality:
 *
 *  - Checks the DB to get the timestamp of the last-scraped reddit comment was.
 *  - Calls the reddit API to request new comments,
 *  - Parses the scraped data and stores the relevant data/metrics in our DB.
 *
 */

import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import * as querystring from 'qs';

// Do a token request.
const url = 'https://www.reddit.com/api/v1/access_token';
const payload = {
  grant_type: 'client_credentials',
};
const basicAuth: AxiosRequestConfig = {
  auth: {
    username: process.env.NX_RDDT_ID,
    password: process.env.NX_RDDT_SECRET,
  },
};

console.log('>>>>>>> axios-ing it up >>>>>>>');
axios({
  ...basicAuth,
  method: 'POST',
  url: url,
  data: querystring.stringify(payload),
}).then((response) => {
  console.log('response.data %o', response.data);
});
