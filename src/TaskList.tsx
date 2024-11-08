//import { Link } from "react-router-dom";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  onDeleteTask: (index: number) => void;
}
console.log("TaskList Items outside the function");
const TaskList = ({ tasks, onDeleteTask }: Props) => {
  console.log("TaskList Items");
  return (
    <ul>
      {tasks.map((task, idx) => (
        <li key={task.id || `task-${idx}`}>
          <Task item={task} removeTask={() => onDeleteTask(idx)} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
