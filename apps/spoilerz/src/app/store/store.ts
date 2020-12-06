/**
 *
 * The main/root Redux store used for our app. We may need to slice this up into
 * smaller stores later.
 *
 */

/** React stuff */
import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

/** Spoilerz stuff */
import { StoreState } from '../interfaces/interfaces';
import { reducer } from '../reducers/reducer';
import { rootSaga } from '../sagas/sagaRequestFeed';

// Initialize saga middleware and redux store.
const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

/**
 *
 * The Redux store
 *
 */
export const store: Store<StoreState> = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

// Run the saga to watch for data requests for the activity feed.
sagaMiddleware.run(rootSaga, store.getState);
