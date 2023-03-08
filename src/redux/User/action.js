import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase/utils';
import userTypes from '../User/types';

export const setCurrentUser = user => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const signInUser = ({email, password}) => async dispatch => {
  try {
    await signInWithEmailAndPassword (auth, email, password);
    dispatch ({
      type: userTypes.SIGN_IN_SUCCESS,
      payload: true,
    });
  } catch (err) {
    console.log (err);
  }
};
