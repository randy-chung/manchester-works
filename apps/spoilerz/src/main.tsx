import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import { watchRequestFeedData } from './app/sagas/sagaRequestFeed';

import { App } from './app/App';

/**
 * Temporary -- we will create a real reducer in its own file later.
 */
function tmpReducer() {}

// Initialize saga middleware and redux store.
const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
const store: Store = createStore(tmpReducer, applyMiddleware(sagaMiddleware));

// Run the saga to watch for data requests for the activity feed.
sagaMiddleware.run(watchRequestFeedData);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
