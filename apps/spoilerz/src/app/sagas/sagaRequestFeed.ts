/**
 * Sagas related to requesting feed data (events/activities displayed on the home page).
 */

/** React/infrastructural stuff */
import { call, fork, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import querystring from 'querystring';

/** Spoilerz stuff */
import {
  ActionTypeKeys,
  FeedEvent,
  RedditToken,
  StoreState,
} from '../interfaces/interfaces';
import * as authLib from '../lib/auth';

/**
 *
 * Root saga
 *
 */
export function* rootSaga(getState: () => StoreState) {
  const getStoredToken = () => getState().redditToken;

  yield fork(watchFeedReq, getStoredToken);
  yield fork(watchToken);
}

/**
 *
 * Watcher Sagas
 *
 */

/**
 * Watcher for actions signifying a request for feed data.
 */
function* watchFeedReq(getStoredToken: () => RedditToken) {
  yield takeEvery(ActionTypeKeys.ReqFeedEvents, function* () {
    const token = getStoredToken();
    // Check if the token in the redux store is valid. If not, get a new one. Dispatch the
    // 'got token' action once we have a token, so the saga can trigger the actual API call.
    if (!authLib.isTokenValid(token)) {
      const token = yield requestToken();
      // First, save the token in the redux store.
      yield put({
        type: ActionTypeKeys.SetReqToken,
        payload: { token: token },
      });

      // Trigger the next steps in doing the request.
      yield put({
        type: ActionTypeKeys.GotReqToken,
        payload: { token: token },
      });
    } else {
      // If we already have a token, skip to the next steps in doing the request.
      yield put({
        type: ActionTypeKeys.GotReqToken,
        payload: { token: token },
      });
    }
  });
}

/**
 * Watcher for action signifying a valid reddit OAuth token has been retrieved.
 */
function* watchToken() {
  yield takeEvery(ActionTypeKeys.GotReqToken, requestData);
}

/**
 *
 * Worker Sagas
 *
 */

/**
 * Call the reddit API to get discussion threads. This should only be called once we know we
 * have a valid OAuth token.
 */
function* requestData() {
  try {
    // yield call(getFeedData);
    // const requestDogs = function (): AxiosPromise<unknown> {
    //   // Get 5 random dog images.
    //   return axios({
    //     method: 'get',
    //     url: 'https://dog.ceo/api/breeds/image/random/5',
    //   });
    // };
    // const dogs = yield call(requestDogs);
    // const parsedDogs = parseDogs(dogs.data.message);
    // yield put({ type: ActionTypeKeys.GotFeedEvents, payload: parsedDogs });
  } catch (err) {
    // dispatch a failure action to the store with the error
    yield put({ type: ActionTypeKeys.ErrApiCall, err });
  }
}

/**
 *
 * Helper/Utility Functions
 *
 */

/**
 * Request a 'userless' authorization token from reddit. Details under the 'Application Only OAuth'
 * section here: https://github.com/reddit-archive/reddit/wiki/OAuth2
 *
 * @returns Promise that resolves with the access token (string). This token should be used with
 *          all subsequent requests to the reddit API.
 */
function requestToken(): Promise<RedditToken> {
  const url = authLib.getUrlForTokenReq();
  const payload = authLib.getPayloadForTokenReq();
  const basicAuth: AxiosRequestConfig = authLib.getBasicAuthForTokenReq();

  // NOTE (Randy Chung - 2020-12-06): The reddit OAuth endpoint needs the POST request to be of
  // content type application/x-www-form-urlencoded and not application/json, so we need to use the
  // querystring lib to properly encode the body/payload. The request will fail if we don't do this.
  return axios({
    ...basicAuth,
    method: 'POST',
    url: url,
    data: querystring.stringify(payload),
  }).then((response) => {
    return parseToken(response.data);
  });
}

/** Parse the token received from the reddit OAuth endpoint. Mainly, we want to convert the expiry
 time into a usable JS Date. */
function parseToken(token: {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
}): RedditToken {
  const now = new Date();
  const nowSeconds = now.getSeconds();
  const expiry = new Date(now.setSeconds(nowSeconds + token.expires_in));

  return {
    token: token.access_token,
    expiry: expiry,
  };
}
