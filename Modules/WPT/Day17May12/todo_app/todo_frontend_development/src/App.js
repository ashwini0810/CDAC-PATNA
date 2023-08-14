import TaskList from "./Components/TaskList";
import AddTask from "./Components/AddTask"
import "./Style.css";
import {useState} from "react"

function App() {
  const [showNewTask, setShowNewTask] = useState(false)
  
  const [tasks, setTasks] = useState([]);

  const fetchTasks = function () {
      //fetch data from server
      fetch("/tasks", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setTasks(data))
        .catch((err) => console.log(err));
    };

  return (
    <div className="container-fluid">
      <div
        className="row justify-content-evenly align-items-center"
        style={{ height: "100vh" }}
      >
        {showNewTask ? <AddTask fetchTasks={fetchTasks} showNewTask={showNewTask}  setShowNewTask={setShowNewTask}/> :""}
        <TaskList tasks={tasks} fetchTasks={fetchTasks} showNewTask={showNewTask}  setShowNewTask={setShowNewTask} />
      </div>
    </div>
  );
}

export default App;
