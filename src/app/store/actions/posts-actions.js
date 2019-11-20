import * as actions from "./action-types";

import { firebaseDBGetPosts } from "~services/axios";

const fetchPostsStart = () => {
  return {
    type: actions.FETCH_POSTS_START,
    loading: true,
    error: null
  };
};

const fetchPostsSuccess = (data) => {
  return {
    type: actions.FETCH_POSTS_SUCCESS,
    data,
    loading: false
  };
};

const fetchPostsError = (error) => {
  return {
    type: actions.FETCH_POSTS_ERROR,
    loading: false,
    error
  };
};

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsStart());

  try {
    const response = await firebaseDBGetPosts();

    dispatch(fetchPostsSuccess(response.data));
  } catch (err) {
    dispatch(fetchPostsError(err));
  }
};
