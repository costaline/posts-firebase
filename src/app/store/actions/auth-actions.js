import * as actions from "./action-types";
import { firebaseAuthSignUp, firebaseAuthSignIn } from "~services/firebase";

const authStart = () => {
  return {
    type: actions.AUTH_START
  };
};

const authSuccess = (response) => {
  return {
    type: actions.AUTH_SUCCESS,
    user: response.data
  };
};

const authError = (err) => {
  return {
    type: actions.AUTH_ERROR,
    error: err.response.data
  };
};

export const authSignUp = (authData) => async (dispatch) => {
  dispatch(authStart());

  try {
    const res = await firebaseAuthSignUp(authData);

    dispatch(authSuccess(res));
  } catch (err) {
    dispatch(authError(err));
  }
};

export const authSignIn = (authData) => async (dispatch) => {
  try {
    const res = await firebaseAuthSignIn(authData);

    dispatch(authSuccess(res));
  } catch (err) {
    dispatch(authError(err));
  }
};
