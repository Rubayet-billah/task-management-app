import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <ul className="bg-gray-100 px-4 rounded-lg shadow mt-5">
      {tasks?.map((task, index) => (
        <li key={index} className="border-b-2 py-2">
          {task.text}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
