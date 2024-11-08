import { useEffect } from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "taskAppState", // Updated key for clarity
    { tasks: [] }
  );

  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };

  const deleteTask = (index: number) => {
    const updatedTasks = taskAppState.tasks.filter((_, i) => i !== index);
    setTaskAppState({ tasks: updatedTasks });
  };

  useEffect(() => {
    const id = setTimeout(() => {
      console.log(`Saved ${taskAppState.tasks.length} items to the backend`);
    }, 5000);

    return () => {
      console.log("Clearing any existing network calls");
      clearTimeout(id);
    };
  }, [taskAppState.tasks]);

  return (
    <div className="container py-10 max-w-7xl mx-auto text-center">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-md mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Smart Tasks Demo Project for Learning Purpose
      </h1>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="border border-slate-200 rounded-xl p-4 ">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} onDeleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
