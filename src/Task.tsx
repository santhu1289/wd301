import React from "react";
import "./TaskCard.css";

interface TaskProp {
  title: string;
  description?: string; // Optional description prop
  dueDate?: string; // Optional dueDate prop
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100 p-4 rounded-md">
        <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        {this.props.dueDate && (
          <p className="text-sm text-slate-500">
            Due Date: {this.props.dueDate}
          </p>
        )}
        {this.props.description && (
          <p className="text-sm text-slate-500">
            Description: {this.props.description}
          </p>
        )}
      </div>
    );
  }
}

export default Task;
