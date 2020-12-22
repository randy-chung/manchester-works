/**
 * A single event that is displayed in a card on the main feed.
 */
export interface FeedEvent {
  id: number;
  title: string;
  content: string;
  imgUrl: string;
}

/**
 * A parsed version of the token we get from reddit's OAuth.
 */
export interface RedditToken {
  token: string;
  expiry: Date;
}

/**
 * The type for the state kept in our Redux store.
 */
export interface StoreState {
  /** All of the events we are displaying on the main feed. */
  feedEvents: FeedEvent[];
  redditToken: RedditToken;
}

/**
 * The available action types for our Redux store. Each value in this enum corresponds to
 * a recognized 'type' field value in an action object.
 * See `OtherAction` below for an explanation of the `OtherAction` type, which is used to cover
 * third-party actions that may be flowing through Redux.
 */
export enum ActionTypeKeys {
  /** Store an auth/request token in the redux store. */
  SetReqToken = 'SET_REQ_TOKEN',
  /** Used when doing requests to reddit's API.  */
  GotReqToken = 'GOT_REQ_TOKEN',
  /** This action is used to trigger a request for feed event data. */
  ReqFeedEvents = 'REQ_FEED_EVENTS',
  /** Saga should `put` this action once it has received data. */
  GotFeedEvents = 'GOT_FEED_EVENTS',
  ErrApiCall = ' API_CALL_FAILURE',
  OtherAction = 'OTHER_ACTION_as9fl39447j^3j3me',
}

/**
 * All the available actions for our store listed below.
 */

/** This action tells the redux store to save the specified token. */
export interface SetReqTokenAction {
  type: ActionTypeKeys.SetReqToken;
  payload: { token: RedditToken };
}

/** This action tells our data request saga that we have the token, so we're good to proceed with
 the API request. */
export interface GotReqTokenAction {
  type: ActionTypeKeys.GotReqToken;
  payload: { token: RedditToken };
}

/** This action triggers the process to request data to populate the feed. */
export interface ReqFeedAction {
  type: ActionTypeKeys.ReqFeedEvents;
}

/** This action signifies feed data has been received, so it's time to update the UI. */
export interface GotFeedAction {
  type: ActionTypeKeys.GotFeedEvents;
  payload: FeedEvent[];
}

/** Error Actions */

/** Dispatch this action if we get an API request error. Error handlers should be listening for
 this action. */
export interface ErrApiCallAction {
  type: ActionTypeKeys.ErrApiCall;
}

/**
 * From: https://spin.atomicobject.com/2017/07/24/redux-action-pattern-typescript/
 * The list of actions we handle in our reducers is almost never the complete list of actions
 * flowing through Redux. Third-party plugins and Redux built-in actions happen as well, and our
 * reducers need to handle them appropriately. It’d be nice to get help from TypeScript so that we
 * don’t forget.
 *
 * Our preferred approach for this is to define an OtherAction type (which we never dispatch) that
 * lives in our ActionTypes, so TypeScript will warn us if it’s not handled.
 */
export interface OtherAction {
  type: ActionTypeKeys.OtherAction;
}

/**
 * All possible Redux action types unioned into one type. This is useful for type declarations
 * on reducer functions, etc.
 */
export type ActionTypes =
  | SetReqTokenAction
  | GotReqTokenAction
  | ReqFeedAction
  | GotFeedAction
  | ErrApiCallAction
  | OtherAction;
