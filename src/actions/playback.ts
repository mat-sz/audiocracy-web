import { ActionModel, QueueItem } from '../types/Models';
import { ActionType } from '../types/ActionType';

export function addAction(url: string): ActionModel {
  return {
    type: ActionType.ADD,
    value: url,
  };
}

export function downvoteAction(): ActionModel {
  return {
    type: ActionType.DOWNVOTE,
    value: undefined,
  };
}

export function skipAction(): ActionModel {
  return {
    type: ActionType.SKIP,
    value: undefined,
  };
}
