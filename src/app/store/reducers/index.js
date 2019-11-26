import { combineReducers } from "redux";

import postsReducer from "./posts-reducer";
import newPostReducer from "./new-post-reducer";
import authReducer from "./auth-reducer";
import postReducer from "./post-reducer";

export default combineReducers({
  postsReducer,
  newPostReducer,
  authReducer,
  postReducer
});
