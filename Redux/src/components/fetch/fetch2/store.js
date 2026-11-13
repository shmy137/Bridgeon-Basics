import userReducer from "./slice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
export default store
