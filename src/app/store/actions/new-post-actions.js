import * as actions from "./action-types";

import { firebaseDBSendPost } from "~services/axios";

const sendPostStart = () => {
  return {
    type: actions.SEND_POST_START,
    sending: true,
    error: null
  };
};

const sendPostSuccess = () => {
  return {
    type: actions.SEND_POST_SUCCESS,
    sending: false,
    error: null
  };
};

const sendPostError = (error) => {
  return {
    type: actions.SEND_POST_ERROR,
    loading: false,
    error
  };
};

export const sendPost = (post) => async (dispatch) => {
  dispatch(sendPostStart());

  try {
    await firebaseDBSendPost(post);

    dispatch(sendPostSuccess());
  } catch (err) {
    dispatch(sendPostError(err));
  }
};
