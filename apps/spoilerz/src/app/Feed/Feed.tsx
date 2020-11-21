/** React stuff */
import React from 'react';
import { connect } from 'react-redux';

/** UI components */
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

/** Interfaces */
import { FeedEvent, StoreState } from '../interfaces/interfaces';

/** Styles */
import styles from './Feed.module.scss';

interface FeedProps {
  feedEvents: FeedEvent[];
}

/**
 * Use this with `connect` to subscribe the container component returned by `connect` to updates
 * from the redux store updates.
 */
function mapStateToProps(state: StoreState) {
  // The object returned by this function (used by `connect`, at the bottom of this file) allows
  // the connect-wrapped component to subscribe to the specified field from the Redux store. The
  // object's keys become props in the wrapped component, which are subscribed to the store field
  // specified by the corresponding value.
  // ie. key : value is [prop name in wrapped component] : [field in store to subscribe to]
  return {
    feedEvents: state.feedEvents,
  };
}

class Feed extends React.PureComponent<FeedProps> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className={styles.Feed}>
        {this.props.feedEvents.map((feedEvent) => (
          <li key={feedEvent.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src="https://a.ltrbxd.com/resized/film-poster/5/0/4/4/0/5/504405-the-lovebirds-0-140-0-210-crop.jpg?k=ef40de8287 2x"
                className={styles.cardImgTop}
              />
              <Card.Body>
                <Card.Title>{feedEvent.title}</Card.Title>
                <Card.Text>{feedEvent.content}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    );
  }
}

// Connect the Feed component to the store and return the store-wrapped component.
export default connect(mapStateToProps)(Feed);
