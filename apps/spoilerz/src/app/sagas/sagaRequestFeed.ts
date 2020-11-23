/**
 * Sagas related to requesting feed data (events/activities displayed on the home page).
 */

/** React/infrastructural stuff */
import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosPromise } from 'axios';

/** Spoilerz stuff */
import { ActionTypeKeys, FeedEvent } from '../interfaces/interfaces';

/**
 * Worker saga.
 */
function* requestData() {
  try {
    const requestDogs = function (): AxiosPromise<unknown> {
      // Get 5 random dog images.
      return axios({
        method: 'get',
        url: 'https://dog.ceo/api/breeds/image/random/5',
      });
    };

    const dogs = yield call(requestDogs);
    const parsedDogs = parseDogs(dogs.data.message);
    yield put({ type: ActionTypeKeys.GotFeedEvents, payload: parsedDogs });
  } catch (err) {
    // dispatch a failure action to the store with the error
    yield put({ type: ActionTypeKeys.ErrApiCall, err });
  }
}

/**
 * Watcher saga. This function will be used to watch for any Feed request actions.
 */
export function* watchRequestFeedData() {
  yield takeEvery(ActionTypeKeys.reqFeedEvents, requestData);
}

/**
 *
 * Helper functions
 *
 */

function parseDogs(rawDogs: unknown[]): FeedEvent[] {
  return rawDogs.map(
    (url: string, index: number): FeedEvent => {
      const urlParts = url.split('/');
      return {
        id: index,
        title: urlParts[urlParts.length - 2],
        content: urlParts[urlParts.length - 2],
        imgUrl: url,
      };
    }
  );
}
