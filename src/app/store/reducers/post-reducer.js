import * as actions from "~store/actions/action-types";

const initialState = {
  post: {},
  requesting: false,
  error: null
};

const postReducer = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case actions.FETCH_POST_START:
      return {
        ...state,
        requesting: true,
        error: null
      };

    case actions.FETCH_POST_SUCCESS:
      return {
        ...state,
        requesting: false,
        post: payload.post
      };

    case actions.FETCH_POST_ERROR:
      return {
        ...state,
        requesting: false,
        error: payload.error
      };

    case actions.USER_DELETE_POST_START:
      return { ...state, requesting: true, error: null };

    case actions.USER_DELETE_POST_SUCCESS:
      return { ...state, post: {}, requesting: false, error: null };

    case actions.USER_DELETE_POST_ERROR:
      return { ...state, requesting: false, error: payload.error };

    default:
      return state;
  }
};

export default postReducer;
