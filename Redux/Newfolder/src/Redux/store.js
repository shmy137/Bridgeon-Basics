import { createStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer.js";


const store = createStore(counterReducer)

export default store;