import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Slice/todoSlice";

export const store = configureStore({
  reducer: { todo: todoSlice },
});
