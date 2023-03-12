import {all, put, takeLatest, call} from 'redux-saga/effects';
import userTypes from './userTypes';
import {signInSuccess} from './userAction';
import {auth} from '../../firebase/utils';
import {signInWithEmailAndPassword} from 'firebase/auth';

export function* getSnapshotFromUserAuth () {}

export function* emailSignIn({payload: {email, password}}) {
  try {
    yield signInWithEmailAndPassword (auth, email, password);
    // yield put (signInSuccess);
    // dispatch ({
    //   type: userTypes.SIGN_IN_SUCCESS,
    //   payload: true,
    // });
  } catch (err) {
    console.log (err);
  }
}

export function* onEmailSignInStart () {
  yield takeLatest (userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export default function* userSagas () {
  yield all (call[onEmailSignInStart]);
}
