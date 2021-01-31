import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:50pm",
      reminder: false,
    },
  ]);
  
 const [showAddTask, setShowAddTask] = useState(false)
 
 
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
