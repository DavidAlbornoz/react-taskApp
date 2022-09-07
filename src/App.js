import { useEffect, useState } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [taskCompleted, setTaskCompleted] = useState(false);

  function createNewTask(newTask) {
    if (!taskItems.find((task) => task.name === newTask))
      setTaskItems([...taskItems, { name: newTask, done: false }]);
  }
  function toogleTask(name) {
    setTaskItems(
      taskItems.map((t) => (t.name === name ? { ...t, done: !t.done } : t))
    );
  }
  function deleteTask() {
    setTaskItems(taskItems.filter((task) => !task.done));
    setTaskCompleted(false);
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <main className="bg-dark vh-100 text-white" >
      <div className="container p-4 col-md-4 offset-md-4">
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable
          taskItems={taskItems}
          toogleTask={toogleTask}
          taskComplete={false}
        />
        <VisibilityControl
          isChecked={taskCompleted}
          setTaskCompleted={(checked) => setTaskCompleted(checked)}
          deleteTask={deleteTask}
        />
        {taskCompleted === true && (
          <TaskTable
            taskItems={taskItems}
            toogleTask={toogleTask}
            taskComplete={true}
          />
        )}
      </div>
    </main>
  );
}

export default App;
