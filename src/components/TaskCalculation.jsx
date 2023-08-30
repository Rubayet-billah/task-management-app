import { useSelector } from "react-redux";

const TaskCalculation = () => {
  const tasks = useSelector((state) => state.tasks);

  const calculateCompletionPercentage = () => {
    if (tasks.length === 0) {
      return "0.00"; // Return 0% if there are no tasks.
    }

    const completedTasks = tasks.filter((task) => task.completed);
    const percentage = (completedTasks.length / tasks.length) * 100;
    return percentage.toFixed(2); // Round the percentage to a whole number.
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-5">
      <h2 className="text-xl font-semibold mb-2">Task Completion Percentage</h2>
      <div className="flex items-center">
        <div className="mr-4 text-3xl font-bold">
          {calculateCompletionPercentage()}%
        </div>
        <div className="flex-1">
          <div className="bg-gray-200 h-4 rounded-full">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{
                width: `${calculateCompletionPercentage()}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCalculation;
