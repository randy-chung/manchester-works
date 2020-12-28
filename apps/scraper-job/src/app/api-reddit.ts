/**
 *
 * This service provides functions that allow us to retrieve data from the reddit API.
 *
 */

import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import * as querystring from 'qs';

/**
 * Get comment data from the reddit API. This function will first get an OAuth token required
 * to get the comments, and then the actual request for the comments.
 */
export function getData(): AxiosPromise {
  // Get the OAuth token then use that token to do the request for comments.
  return getOAuthToken().then((token: string) => {
    return doRequestForComments(token);
  });

  /**
   * This function does the actual HTTP request for reddit comments.
   */
  function doRequestForComments(token: string): AxiosPromise<unknown> {
    const url = `https://oauth.reddit.com/r/wallstreetbets/new?limit=50`;
    return axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  }
}

/**
 * Get an OAuth token from reddit. Since this app is meant to be run in a scheduled fashion, we
 * can get a new token any time we do a data request (we don't have to worry about storing the
 * token for reuse).
 */
function getOAuthToken(): Promise<string> {
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
