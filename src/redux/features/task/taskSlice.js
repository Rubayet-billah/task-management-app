// src/redux/features/task/taskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTask);
    },
    completeTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    clearAllTasks: (state) => {
      state.length = 0; // Clear all tasks by setting the array length to 0
    },
  },
});

export const { addTask, completeTask, clearAllTasks } = taskSlice.actions;
export default taskSlice.reducer;
