import React from "react";
import TaskRow from "./TaskRow";

function TaskTable({ taskItems, toogleTask, taskComplete }) {
  function taskDoneTable(done) {
    return taskItems
      .filter((task) => task.done === done)
      .map((task, index) => (
        <TaskRow key={index} task={task} toogleTask={toogleTask} />
      ));
  }
  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Task</th>
        </tr>
      </thead>
      <tbody>{taskDoneTable(taskComplete)}</tbody>
    </table>
  );
}

export default TaskTable;
