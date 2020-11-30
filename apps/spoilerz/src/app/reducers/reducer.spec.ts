/** React/infrastructural stuff */
import * as _ from 'lodash';

/** Spoilerz stuff */
import { reducer } from './reducer';
import {
  ActionTypeKeys,
  FeedEvent,
  GotFeedAction,
  OtherAction,
  StoreState,
} from '../interfaces/interfaces';

describe('reducer', () => {
  it('should return the default state for unrecognized actions', () => {
    // Arrange
    const origState: StoreState = {
      feedEvents: [{ id: 1, title: 'hello', content: 'world', imgUrl: '' }],
    };
    const action: OtherAction = {
      type: ActionTypeKeys.OtherAction,
    };

    // Act
    const returnedState = reducer(origState, action);

    // Assert
    expect(returnedState).toStrictEqual(origState);
  });

  it('should populate the feed events in the state', () => {
    // Arrange
    const mockEvent: FeedEvent = {
      id: 1,
      title: 'foo',
      content: '',
      imgUrl: '',
    };
    const mockFeedEvents: FeedEvent[] = [
      { ...mockEvent, id: 2 },
      { ...mockEvent, id: 3, title: 'The Wizard of Oz' },
    ];

    const gotFeedAction: GotFeedAction = {
      type: ActionTypeKeys.GotFeedEvents,
      payload: _.cloneDeep(mockFeedEvents),
    };

    // Act
    const returnedState = reducer({ feedEvents: [] }, gotFeedAction);

    // Assert
    expect(returnedState.feedEvents).toStrictEqual(mockFeedEvents);
  });
});
