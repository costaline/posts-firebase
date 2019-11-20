import * as actions from "~store/actions/action-types";

const initialState = {
  posts: {},
  loading: false,
  error: null
};

const postsReducer = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case actions.FETCH_POSTS:
      return state;

    default:
      return state;
  }
};

export default postsReducer;
