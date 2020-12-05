import { Store } from 'redux';
import { ActionModel, QueueItem } from '../types/Models';

export interface StateType {
  queue: QueueItem[];
  current: QueueItem | null;
  downvotes: number;
  time: number;
}

let initialState: StateType = {
  queue: [],
  current: null,
  downvotes: 0,
  time: 0,
};

export type StoreType = Store<StateType, ActionModel>;

export function applicationState(state = initialState, action: ActionModel) {
  const newState = { ...state };

  switch (action.type) {
    default:
      return state;
  }

  return newState;
}
