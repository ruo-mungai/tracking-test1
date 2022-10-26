import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../features/projectslice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});
