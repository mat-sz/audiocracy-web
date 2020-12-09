export enum MessageType {
  // Received:
  STATE = 'state',
  MESSAGE = 'message',
  DOWNVOTES = 'downvotes',
  TIME = 'time',
  SEARCH = 'search',

  // Sent:
  DOWNVOTE = 'downvote',
  ADD = 'add',
  SKIP = 'skip',
  PING = 'ping',
}
