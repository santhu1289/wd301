import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    };
  }

  render() {
    return (
      <form onSubmit={this.addTask}>
        <input
          type="text"
          id="todoTitle"
          value={this.state.title}
          onChange={this.titleChanged}
          placeholder="Title"
          className="border mx-auto w-64 ml-3"
        />
        <input
          type="text"
          id="todoDescription"
          value={this.state.description}
          onChange={this.descriptionChanged}
          placeholder="Description"
          className="border mx-auto w-64 ml-3"
        />
        <input
          type="date"
          id="todoDueDate"
          value={this.state.dueDate}
          onChange={this.dueDateChanged}
          className="border mx-auto w-64 ml-3"
        />
        <button
          type="submit" id="addTaskButton"
          className="bg-green-600 rounded p-1 m-3 hover:bg-green-300 focus:ring"
        >
          Add item
        </button>
      </form>
    );
  }

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ description: event.target.value });
  };

  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ dueDate: event.target.value });
  };

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask: TaskItem = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", dueDate: "" });
  };
}

export default TaskForm;
