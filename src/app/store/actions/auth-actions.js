import * as actions from "./action-types";
import { firebaseAuthSignUp, firebaseAuthLogIn } from "~services/firebase";

const authSignUpStart = () => {
  return {
    type: actions.SIGN_UP_START
  };
};

const authSignUpSuccess = (response) => {
  return {
    type: actions.SIGN_UP_SUCCESS,
    user: response.data
  };
};

const authSignUpError = (err) => {
  return {
    type: actions.SIGN_UP_ERROR,
    error: err.response.data
  };
};

export const authSignUp = (authData) => async (dispatch) => {
  dispatch(authSignUpStart());

  try {
    const res = await firebaseAuthSignUp(authData);

    dispatch(authSignUpSuccess(res));
  } catch (err) {
    dispatch(authSignUpError(err));
  }
};

const authSignInStart = () => {
  return {
    type: actions.SIGN_IN_START
  };
};

const authSignInSuccess = (response) => {
  return {
    type: actions.SIGN_IN_SUCCESS,
    user: response.data
  };
};

const authSignInError = (err) => {
  return {
    type: actions.SIGN_IN_ERROR,
    error: err.response.data
  };
};

export const authSignIn = (authData) => async (dispatch) => {
  dispatch(authSignInStart());

  try {
    const res = await firebaseAuthLogIn(authData);

    dispatch(authSignInSuccess(res));
  } catch (err) {
    dispatch(authSignInError(err));
  }
};
