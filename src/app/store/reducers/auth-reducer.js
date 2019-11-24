import * as actions from "~store/actions/action-types";

const initialState = {
  user: {},
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

    default:
      return state;
  }
};

export default authReducer;
