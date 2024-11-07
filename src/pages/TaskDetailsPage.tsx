import React from "react";
// import { useParams } from "react-router-dom";
// import { useLocalStorage } from "../hooks/useLocalStorage";
// import { TaskItem } from "../types";

// interface TaskDetailsPageParams extends Record<string, string> {
//   id: string;
// }

// interface TaskAppState {
//   tasks: TaskItem[];
// }

const TaskDetailsPage: React.FC = () => {
  console.log("in taskdetailpage");
  // const { id } = useParams<TaskDetailsPageParams>();
  // const [taskAppState] = useLocalStorage<TaskAppState>("tasks", {
  //   tasks: [],
  // });
  // console.log(taskAppState.tasks.find((task) => task.id.toString() === id));
  // const task = taskAppState.tasks.find((task) => task.id.toString() === id);

  // // If the task is not found, display a "task not found" message
  // if (!task) {
  //   return (
  //     <div className="bg-white shadow-md rounded-md p-4 m-8">
  //       <h3 className="text-lg font-medium">Task not found</h3>
  //       <p className="text-gray-600">
  //         The task you're looking for does not exist.
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <div className="bg-white shadow-md rounded-md p-4 m-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium"></h3>
      </div>
      {/* <p className="text-gray-600">{task.description}</p>
      <p className="text-gray-600">{task.dueDate}</p> */}
    </div>
  );
};

export default TaskDetailsPage;
