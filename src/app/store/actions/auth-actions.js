import Cookies from "js-cookie";

import * as actions from "./action-types";
import { firebaseAuthSignUp, firebaseAuthSignIn } from "~services/firebase";

const authStart = () => {
  return {
    type: actions.AUTH_START
  };
};

const authSuccess = (response) => {
  Cookies.set("jwt", response.data.idToken);

  return {
    type: actions.AUTH_SUCCESS,
    user: { id: response.data.localId, email: response.data.email }
  };
};

const authError = (err) => {
  return {
    type: actions.AUTH_ERROR,
    error: err.response.data.error.message
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
  dispatch(authStart());

  try {
    const res = await firebaseAuthSignIn(authData);

    dispatch(authSuccess(res));
  } catch (err) {
    dispatch(authError(err));
  }
};

export const setUser = (user) => {
  return {
    type: actions.USER_SET,
    user: { id: user.user_id, email: user.email }
  };
};

export const logoutUser = (history) => {
  Cookies.remove("jwt");
  history.push("/");
  return {
    type: actions.USER_LOGOUT
  };
};
