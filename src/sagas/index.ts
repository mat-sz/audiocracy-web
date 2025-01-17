import { put, takeEvery, call } from 'redux-saga/effects';
import {
  setConnectedAction,
  setDownvotesAction,
  setMessageAction,
  setQueueAction,
  setSearchResultsAction,
  setTimeAction,
} from '../actions/state';
import { sendMessageAction } from '../actions/websocket';
import { ActionType } from '../types/ActionType';
import { MessageType } from '../types/MessageType';
import { ActionModel, Message, PingMessageModel } from '../types/Models';

function* message(action: ActionModel) {
  const msg: Message = action.value as Message;

  switch (msg.type) {
    case MessageType.STATE:
      yield put(setQueueAction(msg.queue, msg.current));
      yield put(setDownvotesAction(msg.downvotes));
      break;
    case MessageType.TIME:
      yield put(setTimeAction(msg.time));
      break;
    case MessageType.DOWNVOTES:
      yield put(setDownvotesAction(msg.count));
      break;
    case MessageType.MESSAGE:
      yield put(setMessageAction(msg.text));
      break;
    case MessageType.SEARCH:
      yield put(setSearchResultsAction(msg.items));
      break;
    case MessageType.PING:
      const pongMessage: PingMessageModel = {
        type: MessageType.PING,
        timestamp: new Date().getTime(),
      };
      yield put(sendMessageAction(pongMessage));
      break;
  }
}

function* connected() {
  yield put(setConnectedAction(true));
}

function* disconnected() {
  yield put(setConnectedAction(false));
}

function* add(action: ActionModel) {
  yield put(
    sendMessageAction({
      type: MessageType.ADD,
      url: action.value as string,
    })
  );
}

function* downvote() {
  yield put(
    sendMessageAction({
      type: MessageType.DOWNVOTE,
    })
  );
}

function* skip() {
  yield put(
    sendMessageAction({
      type: MessageType.SKIP,
      password: '',
    })
  );
}

export function* root() {
  yield takeEvery(ActionType.WS_MESSAGE, function* (action: ActionModel) {
    // TODO: rewrite this to avoid passing dispatch
    yield call(() => message(action));
  });
  yield takeEvery(ActionType.WS_CONNECTED, connected);
  yield takeEvery(ActionType.WS_DISCONNECTED, disconnected);

  yield takeEvery(ActionType.ADD, add);
  yield takeEvery(ActionType.DOWNVOTE, downvote);
  yield takeEvery(ActionType.SKIP, skip);
}
