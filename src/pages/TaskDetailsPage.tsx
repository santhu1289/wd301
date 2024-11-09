import React from "react";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TaskItem } from "../types";

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const [taskAppState] = useLocalStorage<TaskAppState>("taskAppState", {
    tasks: [], // Ensure the default value is the same
  });

  console.log("this is taskid", id);
  console.log("TaskAppState tasks:", taskAppState.tasks);

  if (!id) {
    console.warn("No ID provided!");
    return <div>Task not found</div>;
  }

  const task = taskAppState.tasks.find((task) => task.id === id);

  if (!task) {
    console.warn("Task not found for the given ID:", id);
    return <div>Task not found</div>;
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
