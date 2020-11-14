import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Feed } from './Feed/Feed';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Temporary -- we will create a real reducer in its own file later.
 */
function tmpReducer() {}

export class App extends React.Component {
  /** Global redux store for the app. */
  private store = createStore(tmpReducer);

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={this.store}>
        <Feed />;
      </Provider>
    );
  }
}
