import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/students/StudentSlice";

export const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});