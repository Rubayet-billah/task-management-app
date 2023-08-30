// src/App.js
import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-lg">
        <h1 className="text-3xl mb-4">Daily Task Tracker</h1>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
