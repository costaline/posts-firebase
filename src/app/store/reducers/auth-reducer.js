import * as actions from "~store/actions/action-types";

const initialState = {
  user: {},
  requesting: false,
  error: null
};

const authReducer = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case actions.SIGN_UP_START:
      return { ...state, requesting: true, error: null };

    case actions.SIGN_UP_SUCCESS:
      return { ...state, requesting: false, user: payload.user };

    case actions.SIGN_UP_ERROR:
      return { ...state, requesting: false, error: payload.error };

    default:
      return state;
  }
};

export default authReducer;
