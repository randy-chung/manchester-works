/**
 * Sagas related to requesting feed data (events/activities displayed on the home page).
 */

/** React stuff */
import { put, takeEvery } from 'redux-saga/effects';

/** Spoilerz stuff */
import { ActionTypeKeys } from '../interfaces/interfaces';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

/**
 * Worker saga.
 */
function* tmpAsync() {
  console.log('tmpAsync!!!!');
  yield delay(3000);

  console.log('put-ing GotFeedEvents....');
  yield put({
    type: ActionTypeKeys.GotFeedEvents,
    payload: [
      {
        id: 1,
        title: 'Mommie Dearest 1981',
        content: 'Mommie Dearest 1981',
      },
      {
        id: 12,
        title: 'Oldboy 2003',
        content: 'Oldboy 2003',
      },
      {
        id: 123,
        title: 'The Mirror Crack’d 1980',
        content: 'The Mirror Crack’d 1980',
      },
      {
        id: 1234,
        title: 'The Elephant Man 1980',
        content: 'The Elephant Man 1980',
      },
      {
        id: 12345,
        title: 'On the Rocks 2020',
        content: 'On the Rocks 2020',
      },
    ],
  });
}

/**
 * Watcher saga. This function will be used to watch for any Feed request actions.
 * // TODO (Randy Chung - 2020-11-14): Just a placeholder for now, we'll add real functionality
 * later.
 */
export function* watchRequestFeedData() {
  console.log('watchRequestFeedData!!!!');
  yield takeEvery(ActionTypeKeys.reqFeedEvents, tmpAsync);
}
