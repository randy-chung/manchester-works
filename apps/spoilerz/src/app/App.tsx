import React from 'react';
import Button from 'react-bootstrap/Button';
import { Feed } from './Feed/Feed';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// Temp -- move this
interface FeedEvent {
  id: number;
  title: string;
  content: string;
}

// TODO (Randy Chung - 2020-11-14): The App component shouldn't need to know about the feed data.
// We should eventually update this component so that App simply sets off an action on button click,
// then Feed subscribes to the updated data coming out of the saga.
// TODO (Randy Chung - 2020-11-14): This should be sent through to the child component via a
// subscription to the saga.. or something like that.
const tmpData: FeedEvent[] = [
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

// TODO (Randy Chung - 2020-11-14): Move this to an interface file.
interface AppProps {}

interface AppState {
  feedData: FeedEvent[]
}

export class App extends React.Component<AppProps, AppState> {

  constructor(props) {
    super(props);
    this.state = {
      feedData: []
    };
  }

  /** Event handler for the 'load more...' button. */
  private getFeedData = () => {
    let newState: AppState = {...this.state};
    newState.feedData = tmpData;
    this.setState(newState);
  };

  render() {
    return (
      <div>
        length is: {this.state.feedData.length}
        {this.state.feedData.length === 0 ? (
          <Button variant="primary" onClick={this.getFeedData}>
            Load More...
          </Button>
        ) : (
          <Feed feedEvents={this.state.feedData}/>
        )}
      </div>
    );
  }
}
