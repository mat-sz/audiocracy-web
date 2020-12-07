export enum MessageType {
  // Received:
  STATE = 'state',
  MESSAGE = 'message',
  DOWNVOTES = 'downvotes',
  TIME = 'time',
  PING = 'ping',

  // Sent:
  DOWNVOTE = 'downvote',
  ADD = 'add',
  SKIP = 'skip',
}
