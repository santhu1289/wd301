import { Link } from "react-router-dom";
import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProps {
  item: TaskItem;
  removeTask: () => void;
}

const Task = ({ item, removeTask }: TaskProps) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100 p-4">
      <div className="sm:flex sm:w-full sm:justify-between">
        <div>
          <Link to={`/tasks/${item.id}`} className="block">
            <h2 className="text-base font-bold my-1">{item.title}</h2>
          </Link>
          {item.dueDate && (
            <p className="text-sm text-slate-500">Due Date: {item.dueDate}</p>
          )}
          {item.description && (
            <p className="text-sm text-slate-500">
              Description: {item.description}
            </p>
          )}
        </div>
        <button
          className="deleteTaskButton cursor-pointer flex items-center justify-center h-6 w-6 rounded-full bg-red-500 text-white my-5 mr-5"
          onClick={removeTask}
          aria-label="Delete task"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Task;
