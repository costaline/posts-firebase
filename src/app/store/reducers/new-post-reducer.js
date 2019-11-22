import * as actions from "~store/actions/action-types";

const initialState = {
  sending: false,
  error: null
};

const newPostReducer = (state = initialState, { type, sending, error }) => {
  switch (type) {
    case actions.SEND_POST_START:
    case actions.SEND_POST_SUCCESS:
    case actions.SEND_POST_ERROR:
      return {
        ...state,
        sending,
        error
      };

    default:
      return state;
  }
};

export default newPostReducer;
