import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../projects/projectslice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});
