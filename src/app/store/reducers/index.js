import { combineReducers } from "redux";

import postsReducer from "./posts-reducer";
import newPostReducer from "./new-post-reducer";
import authReducer from "./auth-reducer";

export default combineReducers({ postsReducer, newPostReducer, authReducer });
