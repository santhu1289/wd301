import React from "react";
import TaskCard from "./TaskCard";

function App() {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-2">Smarter Tasks</h1>
      <p className="text-gray-500 mb-8">
        Project: Graduation Final Year Project (10bedICU school Website)
      </p>

      <div className="flex justify-center gap-12">
        {/* Pending Tasks */}
        <div className="w-1/3 bg-white shadow-md rounded-lg p-4 border">
          <h2 className="text-xl font-semibold mb-4">Pending</h2>
          <TaskCard
            title="Build website with static content"
            dueDate="10th April"
            assigneeName="Rohit S"
          />
          <TaskCard
            title="Add Blog"
            dueDate="22nd March"
            assigneeName="Rohit M"
          />
          <button className="mt-4 w-full py-2 text-gray-600 border rounded bg-gray-100 hover:bg-gray-200">
            + New Task
          </button>
        </div>

        {/* Done Tasks */}
        <div className="w-1/3 bg-white shadow-md rounded-lg p-4 border">
          <h2 className="text-xl font-semibold mb-4">Done</h2>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th April"
            assigneeName="Rohit M"
          />
          <TaskCard
            title="Get Approval from principal"
            completedAtDate="20th April"
            assigneeName="Ajay S"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
