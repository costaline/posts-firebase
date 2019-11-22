import { combineReducers } from "redux";

import postsReducer from "./posts-reducer";
import newPostReducer from "./new-post-reducer";

export default combineReducers({ postsReducer, newPostReducer });
