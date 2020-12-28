/**
 *
 * This service provides functions that allow us to retrieve data from the reddit API.
 *
 */

import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import * as querystring from 'qs';

export function getData(): AxiosPromise {
  const token = getOAuthToken().then((token) => {
    console.log('token %o', token);
  });
  return;
}

/**
 * Get an OAuth token from reddit. Since this app is meant to be run in a scheduled fashion, we
 * can get a new token any time we do a data request (we don't have to worry about storing the
 * token for reuse).
 */
function getOAuthToken(): AxiosPromise {
  const url = 'https://www.reddit.com/api/v1/access_token';

  const payload = {
    grant_type: 'client_credentials',
  };

  // Get the credentials from .local.env, which isn't part of the repo.
  const basicAuth: AxiosRequestConfig = {
    auth: {
      username: process.env.NX_RDDT_ID,
      password: process.env.NX_RDDT_SECRET,
    },
  };

  return axios({
    ...basicAuth,
    method: 'POST',
    url: url,
    data: querystring.stringify(payload),
  }).then((response) => response.data.access_token);
}
