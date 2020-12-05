import { Store } from 'redux';
import { ActionType } from '../types/ActionType';
import { ActionModel, QueueItem } from '../types/Models';

export interface StateType {
  queue: QueueItem[];
  current: QueueItem | null;
  downvotes: number;
  time: number;
  connected: boolean;
}

let initialState: StateType = {
  queue: [],
  current: null,
  downvotes: 0,
  time: 0,
  connected: false,
};

export type StoreType = Store<StateType, ActionModel>;

export function applicationState(state = initialState, action: ActionModel) {
  const newState = { ...state };

  switch (action.type) {
    case ActionType.SET_CONNECTED:
      newState.connected = action.value as boolean;
      break;
    case ActionType.SET_DOWNVOTES:
      newState.downvotes = action.value as number;
      break;
    case ActionType.SET_TIME:
      newState.time = action.value as number;
      break;
    case ActionType.SET_QUEUE:
      const value = action.value as {
        queue: QueueItem[];
        current: QueueItem | null;
      };
      newState.current = value.current;
      newState.queue = value.queue;
      break;
    default:
      return state;
  }

  return newState;
}
