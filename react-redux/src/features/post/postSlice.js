import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: "1",
      title: "I am a title",
      content: "I am a post content that should be fulfilled",
    },
    {
      id: "2",
      title: "I am a title two",
      content: "I am a post content two that should be fulfilled",
    },
    {
      id: "3",
      title: "I am title three",
      content: "I am post content three that should be fulfilled",
    },
  ],
};

// posts slice with all the actions
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
