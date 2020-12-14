/** React/infrastructural stuff */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/** Spoilerz stuff */
import App from './app/App';
import { store } from './app/store/store';

/** UI components */
/** Interfaces */
/** Styles */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
