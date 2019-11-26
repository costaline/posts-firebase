import * as actions from "~store/actions/action-types";
import { firebaseDBGetPost } from "~services/firebase";

const fetchPostStart = () => {
  return {
    type: actions.FETCH_POST_START
  };
};

const fetchPostSuccess = (post) => {
  return {
    type: actions.FETCH_POST_SUCCESS,
    post
  };
};

const fetchPostError = (error) => {
  return {
    type: actions.FETCH_POST_ERROR,
    error
  };
};

export const fetchPost = (id) => async (dispatch) => {
  dispatch(fetchPostStart());

  try {
    const post = await firebaseDBGetPost(id);

    dispatch(fetchPostSuccess(post));
  } catch (err) {
    dispatch(fetchPostError(err));
  }
};
