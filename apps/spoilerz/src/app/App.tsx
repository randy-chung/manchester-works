/** React stuff */
import React from 'react';

/** Spoilerz stuff */
import Feed from './Feed/Feed';
import { store } from './store/store';

/** UI components */
import Button from 'react-bootstrap/Button';

/** Interfaces */
import { ActionTypeKeys } from './interfaces/interfaces';

/** Styles */
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * App component
 */
export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /** Event handler for the 'load more...' button. */
  private getFeedData = () => {
    console.log('this.props %o', this.props);
    store.dispatch({ type: ActionTypeKeys.reqFeedEvents });
  };

  render() {
    return (
      <div>
        {/* length is: {this.state.feedData.length}
        {this.state.feedData.length === 0 ? (
          <Button variant="primary" onClick={this.getFeedData}>
            Load More...
          </Button>
        ) : (
          <Feed feedEvents={this.state.feedData} />
        )} */}
        <Button variant="primary" onClick={this.getFeedData}>
          Load More...
        </Button>
        <Feed />
      </div>
    );
  }
}
