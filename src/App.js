import {useState } from 'react';

import Header from './components/Header'
import Tasks from './components/Tasks';


function App() {
  const [tasks, setTasks] = useState(
        [
            {
                id: 1, 
                text: 'Doctors Appointment',
                day: 'Feb 5th at 2:30pm',
                reminder: true,
            },
            {
                id: 2, 
                text: 'Meeting at School',
                day: 'Feb 6th at 1:30pm',
                reminder: true,
            },
            {
                id: 3, 
                text: 'Food Shopping',
                day: 'Feb 5th at 2:50pm',
                reminder: false,
            },
        ] 
        
    ) 
  
  
  const name = 'Brad'
  const x = false
  return (
    <div className="container">
      <h1>Hello from {name}</h1>
      <h1>Hello from {x ? 'yes' : 'No'}</h1>
      <Header title = {1} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
