import React, { useState } from "react";

function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("Task", newTaskName);
    createNewTask(newTaskName);
    setNewTaskName("");
  };
  return (
    <form className="my-2 row" onSubmit={(e) => handleSubmit(e)}>
      <div className="col-9">
        <input
          className="form-control"
          type="text"
          placeholder="Enter new task"
          onChange={(e) => setNewTaskName(e.target.value)}
          value={newTaskName}
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm"> Save </button>
      </div>
    </form>
  );
}

export default TaskCreator;
