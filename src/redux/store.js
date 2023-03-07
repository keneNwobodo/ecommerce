import {legacy_createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'; // MiddleWare logger

import rootReducer from './rootReducer';

export const middleware = [logger];

export const store = legacy_createStore (
  rootReducer,
  applyMiddleware (...middleware)
);

export default store;
