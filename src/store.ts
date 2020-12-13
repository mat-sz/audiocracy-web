import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { applicationState, StoreType } from './reducers';
import { root } from './sagas';
import { socketMiddleware } from './socketMiddleware';

const serverUrl = process.env.REACT_APP_SERVER as string;

export const newStore = (): StoreType => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    applicationState,
    applyMiddleware(socketMiddleware(serverUrl), sagaMiddleware)
  );

  sagaMiddleware.run(root);

  return store;
};
