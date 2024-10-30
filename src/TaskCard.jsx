// TaskCard.js
import React from "react";
import PropTypes from "prop-types";
import "./TaskCard.css";

const TaskCard = ({ title, dueDate, completedAtDate, assigneeName }) => {
  return (
    <div className="TaskItem p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {dueDate && <p className="text-gray-500">Due on: {dueDate}</p>}
      {completedAtDate && (
        <p className="text-green-500">Completed on: {completedAtDate}</p>
      )}
      <p className="text-blue-500">Assignee: {assigneeName}</p>
    </div>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
  completedAtDate: PropTypes.string,
  assigneeName: PropTypes.string.isRequired,
};

export default TaskCard;
