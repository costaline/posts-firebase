import * as actions from "~store/actions/action-types";

const initialState = {
  user: null,
  requesting: false,
  error: null
};

const authReducer = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case actions.AUTH_START:
      return { ...state, requesting: true, error: null };

    case actions.AUTH_SUCCESS:
      return { ...state, requesting: false, user: payload.user };

    case actions.AUTH_ERROR:
      return { ...state, user: {}, requesting: false, error: payload.error };

    case actions.USER_LOGOUT:
      return {
        ...state,
        user: null
      };

    case actions.USER_SET:
      return { ...state, user: payload.user };

    default:
      return state;
  }
};

export default authReducer;
