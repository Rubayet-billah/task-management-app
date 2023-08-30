// src/App.js
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskCalculation from "./components/TaskCalculation";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
        <h1 className="text-3xl mb-4">Daily Task Tracker</h1>
        <TaskCalculation />
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
