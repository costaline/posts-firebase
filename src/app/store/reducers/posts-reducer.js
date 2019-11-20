import * as actions from "~store/actions/action-types";

const initialState = {
  posts: null,
  loading: false,
  error: null
};

const postsReducer = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case actions.FETCH_POSTS_START:
      return {
        ...state,
        loading: payload.loading,
        error: null
      };

    case actions.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload.posts,
        loading: payload.loading
      };

    case actions.FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: payload.loading,
        error: payload.error
      };

    default:
      return state;
  }
};

export default postsReducer;
