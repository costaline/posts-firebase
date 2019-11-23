import * as actions from "./action-types";

import { firebaseDBGetPosts } from "~services/firebase";

const fetchPostsStart = () => {
  return {
    type: actions.FETCH_POSTS_START,
    loading: true,
    error: null
  };
};

const fetchPostsSuccess = (posts) => {
  return {
    type: actions.FETCH_POSTS_SUCCESS,
    posts,
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
    const posts = await firebaseDBGetPosts();

    dispatch(fetchPostsSuccess(posts));
  } catch (err) {
    dispatch(fetchPostsError(err));
  }
};
