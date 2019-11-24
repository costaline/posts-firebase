import * as actions from "./action-types";
import { firebaseAuthSignUp } from "~services/firebase";

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
