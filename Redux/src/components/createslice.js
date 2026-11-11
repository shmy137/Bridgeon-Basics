import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0,
    count2 : 0
  },

  reducers: {
    increment: (state) => {
      state.count += 1;
      state.count2 += 2;
    },
    decrement: (state) => {
      state.count -= 1;
      state.count2 -= 2;
      
    },
    reset: (state) => {
      state.count = 0;
      state.count2 = 0;

    },

    incrementbyamount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset,incrementbyamount } = counterSlice.actions;

export default counterSlice.reducer;
