import React from "react";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TaskItem } from "../types";

interface TaskDetailsPageParams extends Record<string> {
  id: string;
}

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskDetailsPage: React.FC = () => {
  console.log("Params - ", useParams<TaskDetailsPageParams>());
  const { id } = useParams<TaskDetailsPageParams>();
  const [taskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });
  console.log("Im Inside the function"); // line 15
  console.log("Task ID:", id); // Ensure `id` is defined

  // Fetch task details based on `id`
  if (!id) {
    console.warn("No ID provided!");
    return <div>Task not found</div>;
  }
  const task = taskAppState.tasks.find((task) => task.id === id);
  console.log(task);
  return (
    <div className="bg-white shadow-md rounded-md p-4 m-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">{task?.title}</h3>
      </div>
      <p className="text-gray-600">{task?.description}</p>
      <p className="text-gray-600">{task?.dueDate}</p>
    </div>
  );
};

export default TaskDetailsPage;
