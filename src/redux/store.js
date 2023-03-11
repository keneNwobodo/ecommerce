import {legacy_createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'; // MiddleWare logger
import createSagaMiddle from 'redux-saga';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sageMiddleware = createSagaMiddle ();
export const middleware = [thunk, sageMiddleware, logger];

export const store = legacy_createStore (
  rootReducer,
  applyMiddleware (...middleware)
);
sageMiddleware.run (rootSaga);

export default store;
