import React from 'react';
import styles from './Feed.module.scss';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface FeedProps {
  feedEvents: FeedEvent[]
}

// Temp -- move this
interface FeedEvent {
  id: number;
  title: string;
  content: string;
}

export class Feed extends React.PureComponent<FeedProps> {

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
