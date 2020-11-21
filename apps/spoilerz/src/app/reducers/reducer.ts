/**
 *
 * Reducers to be used with our app's Redux store.
 *
 */

/** React stuff */
import { Action, Reducer } from 'redux';

/** Spoilerz stuff */
import { ActionTypes, ActionTypeKeys } from '../actions/actions';

/** Interfaces */
import { StoreState } from '../interfaces/interfaces';

/**
 * For now this app only has 1 reducer function. We may need to split things up if things
 * get more complex.
 */
export const reducer = function (
  state: StoreState,
  action: ActionTypes
): StoreState {
  console.log('reducer: action %o', action);
  switch (action.type) {
    case ActionTypeKeys.GetFeedEvents:
      state.feedEvents = [
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
      ];
      break;
    default:
      break;
  }

  return state;
};
