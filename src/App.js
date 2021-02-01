import { useState, useEffect} from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  
 const [showAddTask, setShowAddTask] = useState(false)

useEffect(() => {
  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    
    console.log(data)
  } 
  fetchTasks();
},[])

 
 
  //Add Task

  const addTask = (task) => {
   const idNumber = Math.floor(Math.random() * 1000) + 1
   const newTask = { idNumber, ...task}
   setTasks([...tasks, newTask])
  }

  //Delete Task

  const deleteTask = (id) => {
    console.log("delete", id);

    //HOW TO MUTATE STATE
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log("toggled", id);
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder } : task))
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     { showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
