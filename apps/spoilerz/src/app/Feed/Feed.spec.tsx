import React from 'react';
import { render, screen } from '@testing-library/react';

import { Feed } from './Feed';

describe('Feed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Feed />);

    expect(baseElement).toBeTruthy();
  });

  it('should render a number of items corresponding to the feed data', () => {
    // Arrange, Act
    const dataLength = 5; // Temporary, data is hard coded for now.
    render(<Feed />);
    // console.log('baseElement %o', baseElement);
    // screen.debug(); // Show the HTML rendered.
    // screen.getByRole(''); // Passing an empty string shows all available roles.
    const listItems = screen.getAllByRole('listitem');
    const thumbnails = screen.getAllByRole('img');

    // Assert
    expect(listItems.length).toBe(dataLength);
    expect(thumbnails.length).toBe(dataLength); // Each should have an image.
  });
});
