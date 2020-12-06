/**
 * This file currently is acting only to pass through types that are defined in the interfaces
 * file. All the actions are defined there.
 */

import {
  ActionTypeKeys,
  RedditToken,
  SetReqTokenAction,
} from '../interfaces/interfaces';

export {
  ActionTypeKeys,
  ActionTypes,
  ReqFeedAction,
} from '../interfaces/interfaces';

/**
 *
 * Action generators
 *
 */

/**
 * Returns a redux action that tells redux to store the specified token in the redux store.
 *
 * @export
 * @param {RedditToken} token This token is obtained from the reddit OAuth request.
 * @returns {SetReqTokenAction}
 */
export function setReqToken(token: RedditToken): SetReqTokenAction {
  return {
    type: ActionTypeKeys.SetReqToken,
    payload: {
      token: token,
    },
  };
}
