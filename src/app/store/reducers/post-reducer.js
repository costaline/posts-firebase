import * as actions from "~store/actions/action-types";

const initialState = {
  post: {},
  requesting: false,
  error: null,
  edit: false
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

    case actions.USER_TOGGLE_EDIT:
      return { ...state, edit: !state.edit };

    case actions.USER_EDIT_POST_START:
      return { ...state, requesting: true, error: null };

    case actions.USER_EDIT_POST_SUCCESS:
      return { ...state, error: null };

    case actions.USER_EDIT_POST_ERROR:
      return { ...state, error: payload.error };

    default:
      return state;
  }
};

export default postReducer;
