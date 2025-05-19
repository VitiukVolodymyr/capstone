import { applyMiddleware, compose, createStore } from 'redux';
// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const loggerMiddleware = store => next => action => {
  if (!action.type) {
    return next(action);
  }

  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('current state', store.getState());
  next(action);
  console.log('next state', store.getState());
};

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [loggerMiddleware];

const composeEnchancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnchancers);

export const persistor = persistStore(store);
