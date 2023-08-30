// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/taskSlice";
import localStorageMiddleware from "./middlewares/localStorageMiddleware";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [], // Load tasks from localStorage
};

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  preloadedState: initialState, // Set initial state from localStorage
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware), // Apply localStorageMiddleware
});

export default store;
