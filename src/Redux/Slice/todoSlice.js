import { createSlice } from "@reduxjs/toolkit";
import { todoData } from "../../db/data";
const initialState = { todoData };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoList: (state, action) => {
      state.todoData = [...state.todoData, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todoData = state.todoData.filter((el) => el.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const idTodo = state.todoData.findIndex(
        (el) => el.id === action.payload.id
      );
      state.todoData[idTodo] = action.payload.todo;
    },
  },
});

export const { addTodoList, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
