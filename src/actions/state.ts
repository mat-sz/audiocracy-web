import { ActionModel, QueueItem } from '../types/Models';
import { ActionType } from '../types/ActionType';

export function setMessageAction(error: string): ActionModel {
  return {
    type: ActionType.SET_MESSAGE,
    value: error,
  };
}

export function setConnectedAction(connected: boolean): ActionModel {
  return {
    type: ActionType.SET_CONNECTED,
    value: connected,
  };
}

export function setQueueAction(
  queue: QueueItem[],
  current: QueueItem | null
): ActionModel {
  return {
    type: ActionType.SET_QUEUE,
    value: {
      queue,
      current,
    },
  };
}

export function setTimeAction(time: number): ActionModel {
  return {
    type: ActionType.SET_TIME,
    value: time,
  };
}

export function setDownvotesAction(downvotes: number): ActionModel {
  return {
    type: ActionType.SET_DOWNVOTES,
    value: downvotes,
  };
}

export function setSearchResultsAction(results?: QueueItem[]): ActionModel {
  return {
    type: ActionType.SET_SEARCH_RESULTS,
    value: results,
  };
}
