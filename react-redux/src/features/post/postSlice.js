import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {},
    removePost: (state, action) => {},
    editPost: (state, action) => {},
  },
});

export const { addPost, editPost, removePost } = postSlice.actions;

export default postSlice.reducer;
