/**
 *
 * Reducers to be used with our app's Redux store.
 *
 */

/** React stuff */
/** Spoilerz stuff */
import { ActionTypes, ActionTypeKeys } from '../actions/actions';

/** Interfaces */
import { StoreState } from '../interfaces/interfaces';

/** We define the initial state of the Redux store here as a default value in the reducer. */
const initialState: StoreState = { feedEvents: [], redditToken: null };

/**
 * For now this app only has 1 reducer function. We may need to split things up if things
 * get more complex.
 */
export const reducer = function (
  state: StoreState = initialState,
  action: ActionTypes
): StoreState {
  switch (action.type) {
    case ActionTypeKeys.GotFeedEvents:
      return {
        ...state,
        feedEvents: action.payload,
      };
    default:
      return state;
  }
};
