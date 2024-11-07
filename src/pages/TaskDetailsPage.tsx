import React from "react";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TaskItem } from "../types";

interface TaskAppState {
  tasks: TaskItem[];
}
console.log(
  "------------------------------------------------------------------------"
);

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [taskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });

  // Check if tasks and id are loaded correctly
  console.log("Task ID from params:", id);
  console.log("Tasks in localStorage:", taskAppState.tasks);

  // Find task by ID
  const task = taskAppState.tasks.find((task) => task.id.toString() === id);

  if (!task) {
    return (
      <div className="bg-white shadow-md rounded-md p-4 m-8">
        <h3 className="text-lg font-medium">Task not found</h3>
        <p className="text-gray-600">
          The task you're looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-md p-4 m-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">{task.title}</h3>
      </div>
      <p className="text-gray-600">{task.description}</p>
      <p className="text-gray-600">{task.dueDate}</p>
    </div>
  );
};

export default TaskDetailsPage;
