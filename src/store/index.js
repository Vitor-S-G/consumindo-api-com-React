import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import routerReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { persistStore } from 'redux-persist';
import persitedReducer from './modules/rootPersist';

const sagaMiddleweare = createSagaMiddleware();

const store = createStore(
  persitedReducer(routerReducer),
  applyMiddleware(sagaMiddleweare),
);

sagaMiddleweare.run(rootSaga);
export const persistor = persistStore(store);
export default store;
