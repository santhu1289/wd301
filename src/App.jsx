// App.js
import React from "react";
import TaskCard from "./TaskCard";

function App() {
  return (
    <div className="container mx-auto p-4">
      {/* Pending Tasks */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-4">Pending</h1>
        <TaskCard
          title="Build this portal using static content"
          dueDate="10th April"
          assigneeName="Rohit S"
        />
        <TaskCard
          title="Add a blog"
          dueDate="22nd March"
          assigneeName="Rohit M"
        />
      </div>

      {/* Done Tasks */}
      <div>
        <h1 className="text-2xl font-semibold mb-4">Done</h1>
        <TaskCard
          title="Design the mockup"
          completedAtDate="10th April"
          assigneeName="Rohit M"
        />
        <TaskCard
          title="Get Approval from Principal"
          completedAtDate="20th April"
          assigneeName="Ajay S"
        />
      </div>
    </div>
  );
}

export default App;
