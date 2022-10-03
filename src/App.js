import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks,setTask] = useState([
      {
          id: 1,
          text: "Food shopping",
          day: "7th February",
          reminder: false,
      },
      {
          id: 2,
          text: "Doctor Appointment",
          day: "8th February",
          reminder: false,
      },
      {
          id: 3,
          text: "Coffee Date",
          day: "6th February",
          reminder: false,
      }
  ])

  //Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
const toggleReminder = (id) => {
  setTask(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
}


  return (
    <div className="container">
    <Header title="Track your tasks!"/>
    {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No tasks"} 
    </div>
    
  );
}

export default App;
