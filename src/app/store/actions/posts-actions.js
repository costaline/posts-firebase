import * as actions from "./action-types";

export const fetchPosts = () => (dispatch) => {
  dispatch({ type: actions.FETCH_POSTS });
};
