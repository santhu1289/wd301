import React from "react";
import "./TaskCard.css";

interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  dueDate,
  completedAtDate,
  assigneeName,
}) => {
  return (
    <div className="mb-4 p-4 border rounded-md shadow-sm text-left">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      {dueDate && <p className="text-sm text-gray-600">Due On: {dueDate}</p>}
      {completedAtDate && (
        <p className="text-sm text-green-600">
          Completed On: {completedAtDate}
        </p>
      )}
      <p className="text-sm text-gray-700">Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
