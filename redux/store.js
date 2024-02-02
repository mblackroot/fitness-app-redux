import { configureStore } from "@reduxjs/toolkit";
import statsReducer from "./features/statsSlice";

export const store = configureStore({
  reducer: {
    stats: statsReducer,
  },
});
