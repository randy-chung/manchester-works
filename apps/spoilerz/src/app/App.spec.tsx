/** React/infrastructural stuff */
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

/** Spoilerz stuff */
import App from './App';
import { StoreState } from './interfaces/interfaces';

describe('App', () => {
  /** A dummy redux store state object to pass to our test-renderings of App. */
  let mockStore = undefined;
  beforeEach(() => {
    mockStore = createStore((): StoreState => ({ feedEvents: [] }));
  });

  it('should render successfully', () => {
    // Arrange
    const { baseElement } = render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have a "load more" button', () => {
    const { getAllByText } = render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );

    expect(getAllByText('Load More...').length).toBe(1);
  });
});
