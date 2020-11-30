/** React/infrastructural stuff */
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/** Spoilerz stuff */
import App from './App';
import { store } from './store/store';
import {
  ActionTypeKeys,
  ReqFeedAction,
  StoreState,
} from './interfaces/interfaces';

describe('App', () => {
  /** A dummy redux store state object to pass to our test-renderings of App. */
  let mockStore = undefined;

  /** We will query for our load button using this text. */
  const loadMoreBtnTxt = 'Load More...';

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

    expect(getAllByText(loadMoreBtnTxt).length).toBe(1);
  });

  it('should dispatch an action when the button is clicked', () => {
    // Arrange
    const reqFeedAction: ReqFeedAction = { type: ActionTypeKeys.ReqFeedEvents };

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    spyOn(store, 'dispatch');

    const loadBtn = getByText(loadMoreBtnTxt);

    // Act
    userEvent.click(loadBtn);

    // Assert
    expect(store.dispatch).toHaveBeenCalledWith(reqFeedAction);
  });
});
