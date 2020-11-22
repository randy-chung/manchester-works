/**
 * A single event that is displayed in a card on the main feed.
 */
export interface FeedEvent {
  id: number;
  title: string;
  content: string;
}

/**
 * The type for the state kept in our Redux store.
 */
export interface StoreState {
  /** All of the events we are displaying on the main feed. */
  feedEvents: FeedEvent[];
}

/**
 * The available action types for our Redux store. Each value in this enum corresponds to
 * a recognized 'type' field value in an action object.
 * See `OtherAction` below for an explanation of the `OtherAction` type, which is used to cover
 * third-party actions that may be flowing through Redux.
 */
export enum ActionTypeKeys {
  /** This action is used to trigger a request for feed event data. */
  reqFeedEvents = 'REQ_FEED_EVENTS',
  /** Saga should `put` this action once it has received data. */
  GotFeedEvents = 'GOT_FEED_EVENTS',
  OtherAction = 'OTHER_ACTION_as9fl39447j^3j3me',
}

/**
 * All the available actions for our store listed below.
 */

export interface ReqFeedAction {
  type: ActionTypeKeys.reqFeedEvents;
}

export interface GotFeedAction {
  type: ActionTypeKeys.GotFeedEvents;
  payload: FeedEvent[];
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
interface OtherAction {
  type: ActionTypeKeys.OtherAction;
}

/**
 * All possible Redux action types unioned into one type. This is useful for type declarations
 * on reducer functions, etc.
 */
export type ActionTypes = ReqFeedAction | GotFeedAction | OtherAction;
