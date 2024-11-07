import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProps {
  item: TaskItem; // Expect the full TaskItem object
  removeTask: (task: TaskItem) => void;
}

const Task = ({ item, removeTask }: TaskProps) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between ">
        <div>
          {/* Link to task details */}
          <a href={`/tasks/${item.id || ""}`}>
            <h2 className="text-base font-bold my-1">{item.title}</h2>
            {/* Change todoTitle to title */}
          </a>
          <p className="text-sm text-slate-500">{item.dueDate}</p>
          {/* Change todoDueDate to dueDate */}
          <p className="text-sm text-slate-500">
            Description: {item.description}{" "}
            {/* Change todoDescription to description */}
          </p>
        </div>

        {/* Button to delete task */}
        <button
          className="deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5"
          onClick={() => removeTask(item)} // Pass the whole task
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Task;
