// Define your Redux actions here.
// e.g. ACTION = "action" (string is required)
export enum ActionType {
  // State
  SET_MESSAGE = 'SET_MESSAGE',
  SET_CONNECTED = 'SET_CONNECTED',
  SET_QUEUE = 'SET_QUEUE',
  SET_TIME = 'SET_TIME',
  SET_DOWNVOTES = 'SET_DOWNVOTES',

  // WebSockets
  WS_SEND_MESSAGE = 'WS_SEND_MESSAGE',
  WS_MESSAGE = 'WS_MESSAGE',
  WS_CONNECTED = 'WS_CONNECTED',
  WS_DISCONNECTED = 'WS_DISCONNECTED',
}
