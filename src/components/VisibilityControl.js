import React from "react";

function VisibilityControl({ setTaskCompleted, deleteTask, isChecked }) {
  function handleDelete() {
    deleteTask();
  }
  return (
    <div className="d-flex justify-content-between bg-secondary text-white">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setTaskCompleted(e.target.checked)}
        />
        <label>Show task done</label>
      </div>
      <button className="btn btn-danger btn-sm" onClick={() => handleDelete()}>
        {" "}
        Delete
      </button>
    </div>
  );
}

export default VisibilityControl;
