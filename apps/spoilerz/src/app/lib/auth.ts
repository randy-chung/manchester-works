/**
 *
 * This file is meant to house utility functions related to authorizing with reddit. This may
 * include functionality such as requesting an auth token, checking if we have an existing auth
 * token, revoking a token, etc.
 *
 */

/** Spoilerz stuff */
import { RedditToken } from '../interfaces/interfaces';

/**
 * Use this to get reddit the URL used to POST a request to get an OAuth token.
 */
export function getUrlForTokenReq() {
  const url = 'https://www.reddit.com/api/v1/access_token';
  return url;
}

/**
 * Returns the payload to be used with the POST request to reddit's OAuth token request endpoint.
 */
export function getPayloadForTokenReq() {
  const payload = {
    grant_type: 'client_credentials',
  };
  return payload;
}

/**
 * Returns an object with the basic auth data required for the reddit OAuth token request.
 */
export function getBasicAuthForTokenReq() {
  // NOTE (Randy Chung - 2020-12-14): the dotenv lib is used by default by nx to read environment
  // variables from the .local.env file in the root of the app directory. Any vars in that file
  // prefixed with 'NX_' will be read and stored into the process.env object.
  const auth = {
    auth: {
      username: process.env.NX_RDDT_ID,
      password: process.env.NX_RDDT_SECRET,
    },
  };

  return auth;
}

// TODO (Randy Chung - 2020-12-05): our saga should import and use this function.
/**
 * Check if we have a token if the redux store, and if so, is it still valid (not expired).
 */
export function isTokenValid(token: RedditToken): boolean {
  /** If the current time is within this many ms of the expiry, we consider the token invalid. */
  const buffer = 180000; // 3 mins.
  const now = new Date();

  if (!token || token.expiry.getTime() <= now.getTime() + buffer) {
    return false;
  }
  return true;
}
