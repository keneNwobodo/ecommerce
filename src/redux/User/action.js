import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {useDispatch, useNavigate} from 'react-redux';
import {auth, handleUserProfile} from '../../firebase/utils';
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

export const signUpUser = ({
  displayName,
  email,
  password,
  confirmPassword,
}) => async dispatch => {
  if (password !== confirmPassword) {
    const err = ['Password does not match'];
    dispatch ({
      type: userTypes.SIGN_UP_ERROR,
      payload: err,
    });
    return;
  }

  try {
    const {user} = await createUserWithEmailAndPassword (auth, email, password);
    await handleUserProfile (user, {displayName});
    dispatch ({
      type: userTypes.SIGN_UP_SUCCESS,
      payload: true,
    });
  } catch (err) {
    // console.log (err.message);
  }
};

export const resetPassword = ({email}) => async dispatch => {
  // Email reset configurations
  const config = {
    url: 'http://localhost:3000/login',
  };
  try {
    await sendPasswordResetEmail (auth, email, config)
      .then (() => {
        dispatch ({
          type: userTypes.RESET_PASSWORD_SUCCESS,
          payload: true,
        });
      })
      .catch (() => {
        const err = ['Email not found!'];
        dispatch ({
          type: userTypes.RESET_PASSWORD_FAILURE,
          payload: err,
        });
      });
  } catch (error) {}
};
