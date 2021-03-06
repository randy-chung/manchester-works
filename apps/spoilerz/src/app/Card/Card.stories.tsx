/* eslint-disable */
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
// import Card from './Card';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default {
  component: Card,
  title: 'Components/Card',
} as Meta;

export const EmptyCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Text>This is a card.</Card.Text>
      </Card.Body>
    </Card>
  );
};

export const CardWithImageTitleButton = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
