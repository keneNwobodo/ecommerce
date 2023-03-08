import {legacy_createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'; // MiddleWare logger
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export const middleware = [thunk, logger];

export const store = legacy_createStore (
  rootReducer,
  applyMiddleware (...middleware)
);

export default store;
