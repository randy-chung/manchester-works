import React from 'react';
import styles from './Feed.module.scss';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Temp -- move this
interface FeedEvent {
  title: string;
  content: string;
}

export class Feed extends React.PureComponent {
  // Temp fake data.
  readonly feedEvents: FeedEvent[] = [
    {
      title: 'Mommie Dearest 1981',
      content: 'Mommie Dearest 1981',
    },
    {
      title: 'Oldboy 2003',
      content: 'Oldboy 2003',
    },
    {
      title: 'The Mirror Crack’d 1980',
      content: 'The Mirror Crack’d 1980',
    },
    {
      title: 'The Elephant Man 1980',
      content: 'The Elephant Man 1980',
    },
    {
      title: 'On the Rocks 2020',
      content: 'On the Rocks 2020',
    },
  ];

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className={styles.Feed}>
        {this.feedEvents.map((feedEvent) => (
          <li>
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

// const Feed: React.FC = () => (
//   <div className={styles.Feed}>
//     Feed Component
//   </div>
// );

// export default Feed;
