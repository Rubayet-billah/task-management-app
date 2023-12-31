import { useSelector, useDispatch } from "react-redux";
import { BsCheckCircle, BsCircle } from "react-icons/bs";
import { completeTask, clearAllTasks } from "../redux/features/task/taskSlice";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleTaskCompletion = (taskId) => {
    dispatch(completeTask({ id: taskId }));
  };

  const handleClearAllTasks = () => {
    dispatch(clearAllTasks());
    localStorage.removeItem("tasks");
  };

  return (
    <div>
      <ul className="bg-gray-100 px-4 rounded-lg shadow mt-5">
        {tasks?.map((task, index) => (
          <li key={index} className={`border-b-2 py-2 flex items-center `}>
            <button onClick={() => handleTaskCompletion(task.id)}>
              {task.completed ? (
                <BsCheckCircle className="text-green-500 mr-2" />
              ) : (
                <BsCircle className="text-gray-500 mr-2" />
              )}
            </button>
            <p className={`${task.completed && "line-through text-gray-400"}`}>
              {task.text}
            </p>
            <p
              className={`ml-auto font-bold ${
                task.completed ? "text-green-500" : " text-yellow-400"
              } rounded-full px-2 py-1 focus:outline-none`}
            >
              {task.completed ? "Done" : "Ongoing"}
            </p>
          </li>
        ))}
      </ul>
      {tasks?.length > 0 && (
        <button
          onClick={handleClearAllTasks}
          className="bg-red-500 text-white px-4 py-2 rounded my-4 block ml-auto"
        >
          Clear All Tasks
        </button>
      )}
    </div>
  );
}

export default TaskList;
