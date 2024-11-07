import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  onDeleteTask: (index: number) => void;
}

const TaskList = ({ tasks, onDeleteTask }: Props) => {
  return (
    <ul>
      {tasks.map((task, idx) => (
        <Task
          key={idx}
          item={task} // Pass the entire task object
          removeTask={() => onDeleteTask(idx)} // Pass the remove function
        />
      ))}
    </ul>
  );
};

export default TaskList;
