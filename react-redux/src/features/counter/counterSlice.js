import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCount: (state) => {
      state.count += 1;
    },
    subtractCount: (state) => {
      state.count -= 1;
    },
    addByValue: (state, action) => {
      state.count += action.payload;
    },
    subtractByValue: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { addByValue, addCount, subtractByValue, subtractCount } =
  counterSlice.actions;

export default counterSlice.reducer;
