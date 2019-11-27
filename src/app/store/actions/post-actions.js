import * as actions from "~store/actions/action-types";
import { firebaseDBGetPost, firebaseDBDeletePost } from "~services/firebase";

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

const deletePostStart = () => ({
  type: actions.USER_DELETE_POST_START
});

const deletePostSuccess = () => ({
  type: actions.USER_DELETE_POST_SUCCESS
});

const deletePostError = (error) => ({
  type: actions.USER_DELETE_POST_ERROR,
  error
});

export const deletePost = (id, history) => async (dispatch) => {
  dispatch(deletePostStart());

  try {
    await firebaseDBDeletePost(id);
    history.push("/posts");

    dispatch(deletePostSuccess());
  } catch (err) {
    dispatch(deletePostError(err));
  }
};
