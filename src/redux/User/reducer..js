import userTypes from './types';

const INITIAL_STATE = {
  currentUser: null,
  signInSuccess: false,
  signUpSuccess: false,
  signUpError: [],
  resetPasswordSuccess: false,
  resetPasswordFailure: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case userTypes.SIGN_IN_SUCCESS: {
      return {
        ...state,
        signInSuccess: action.payload,
      };
    }
    case userTypes.SIGN_UP_SUCCESS: {
      return {
        ...state,
        signUpSuccess: action.payload,
      };
    }
    case userTypes.SIGN_UP_ERROR: {
      return {
        ...state,
        signUpError: action.payload,
      };
    }
    case userTypes.resetPasswordSuccess: {
      return {
        ...state,
        resetPasswordSuccess: action.payload,
      };
    }
    case userTypes.resetPasswordFailure: {
      return {
        ...state,
        resetPasswordFailure: action.payload,
      };
    }
    case userTypes.AUTH_RESET_FORM: {
      return {
        ...state,
        signInSuccess: false,
        signUpSuccess: false,
        signUpError: [],
        resetPasswordSuccess: false,
        resetPasswordFailure: [],
      };
    }
    default:
      return state;
  }
};

export default userReducer;
