import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loggerMiddleware } from './middleware/logger';
import { rootReducer } from './root-reducer';
import { thunk } from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && loggerMiddleware, thunk].filter(
  Boolean,
);
const composeEnchancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnchancers);

export const persistor = persistStore(store);
