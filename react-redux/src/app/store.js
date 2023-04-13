import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/post/postSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    counter: counterReducer,
    posts: postsReducer,
  },
});
