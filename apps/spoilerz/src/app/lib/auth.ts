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
export function getAuthUrl() {
  const url = 'https://www.reddit.com/api/v1/access_token';
  return url;
}

/**
 * Returns the payload to be used with the POST request to reddit's OAuth token request endpoint.
 */
export function getAuthPayload() {
  const payload = {
    grant_type: 'client_credentials',
  };
  return payload;
}

// TODO (Randy Chung - 2020-12-05): The auth details need to be put in environment variables
// using the dotEnv npm lib.
/**
 * Returns an object with the basic auth data required for the reddit OAuth token request.
 */
export function getBasicAuthForTokenReq() {
  const auth = {
    auth: {
      username: '5-zm3KXrBeRfFA',
      password: 'jEs4E6aWF45M6OFfLNn9mBTX2jSFwA',
    },
  };
  return auth;
}

// TODO (Randy Chung - 2020-12-05): our saga should import and use this function.
/**
 * Check if we have a token if the redux store, and if so, is it still valid (not expired).
 */
export function validateToken(token: RedditToken): boolean {
  /** If the current time is within this many ms of the expiry, we consider the token invalid. */
  const buffer = 180000; // 3 mins.
  const now = new Date();

  if (token.expiry.getTime() <= now.getTime() + buffer) {
    return false;
  }
  return true;
}
