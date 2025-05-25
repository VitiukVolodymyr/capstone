import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { loggerMiddleware } from './middleware/logger';
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
// import { thunk } from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(
  Boolean,
);
const composeEnchancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnchancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
