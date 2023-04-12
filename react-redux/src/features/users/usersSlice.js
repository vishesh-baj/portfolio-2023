import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: "0",
      name: "Dude 1",
    },
    {
      id: "1",
      name: "Dude 2",
    },
    {
      id: "2",
      name: "Dude 3",
    },
  ],
};

const userSlice = () =>
  createSlice({
    name: "users",
    initialState,
    reducers: {},
  });

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
