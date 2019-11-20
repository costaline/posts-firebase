import * as actions from "./action-types";

import { firebase } from "~services/axios";

const fetchPostsStart = () => {
  return {
    type: actions.FETCH_POSTS_START
  };
};

const fetchPostsSuccess = () => {
  return {
    type: actions.FETCH_POSTS_SUCCESS
  };
};

const fetchPostsError = () => {
  return {
    type: actions.FETCH_POSTS_ERROR
  };
};

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsStart());

  try {
    const response = await firebase.get("/posts.json");
    console.log(response);
    dispatch(fetchPostsSuccess());
  } catch (e) {
    dispatch(fetchPostsError());
  }
};
