/** React stuff */
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

/** Spoilerz stuff */
import { App } from './app/App';
import { store } from './app/store/store';
import { watchRequestFeedData } from './app/sagas/sagaRequestFeed';

/** UI components */
/** Interfaces */
/** Styles */

// Initialize saga middleware and redux store.
// const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

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
