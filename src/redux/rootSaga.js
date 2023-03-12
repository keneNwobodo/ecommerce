import {all, call} from 'redux-saga/effects';
import userSagas from './User/userSaga';

export default function* rootSaga () {
  yield all ([call (userSagas)]);
}
