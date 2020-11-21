/**
 *
 * The main/root Redux store used for our app. We may need to slice this up into
 * smaller stores later.
 *
 */

/** React stuff */
import { createStore, Store } from 'redux';

/** Spoilerz stuff */
import { reducer } from '../reducers/reducer';

/** Interfaces */
import { StoreState } from '../interfaces/interfaces';

const initialState: StoreState = { feedEvents: [] };

/**
 *
 * The Redux store
 *
 */
export const store: Store = createStore(reducer, initialState);
