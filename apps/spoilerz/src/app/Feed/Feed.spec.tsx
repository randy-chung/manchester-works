/** React infrastructural stuff */
import React from 'react';
import { render, screen } from '@testing-library/react';

/** Spoilerz stuff */
import { PureFeed } from './Feed';
import { FeedEvent } from '../interfaces/interfaces';

describe('Feed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PureFeed feedEvents={[]} />);

    expect(baseElement).toBeTruthy();
  });

  it('should render a number of items corresponding to the feed data', () => {
    // Arrange
    const mockFeedEvent: FeedEvent = {
      id: 1,
      title: '',
      content: '',
      imgUrl: '',
    };

    const mockFeedData: FeedEvent[] = [
      { ...mockFeedEvent, id: 1 },
      { ...mockFeedEvent, id: 2 },
      { ...mockFeedEvent, id: 3 },
    ];

    // Act
    render(<PureFeed feedEvents={mockFeedData} />);
    // screen.debug(); // Show the HTML rendered.
    // screen.getByRole(''); // Passing an empty string shows all available roles.
    const listItems = screen.getAllByRole('listitem');
    const thumbnails = screen.getAllByRole('img');

    // Assert
    expect(listItems.length).toBe(mockFeedData.length);
    expect(thumbnails.length).toBe(mockFeedData.length); // Each should have an image.
  });
});
