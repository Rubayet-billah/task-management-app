// src/localStorageMiddleware.js
const localStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("tasks", JSON.stringify(store.getState().tasks));
};

export default localStorageMiddleware;
