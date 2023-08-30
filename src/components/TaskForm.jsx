/* eslint-disable react/prop-types */
// src/components/TaskForm.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/task/taskSlice";

function TaskForm() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full p-2 rounded-l border border-r-0 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r border border-l-0 border-blue-500 hover:bg-blue-600 focus:outline-none w-36"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
