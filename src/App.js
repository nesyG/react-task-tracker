import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button"
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [toggleAddTask, setToggleAddTask] = useState(false)
  const [tasks,setTask] = useState([])

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTask(tasksFromServer)
    }
    getTasks()
  }, [])

  //Fetch Tasks
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  //Fetch Task
  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  //Add Task

  const addTask = async(task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTask([...tasks, data])
  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

    setTask(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })

  const data = res.json()

  setTask(tasks.map((task)=> task.id === id ? {...task, reminder: data.reminder} : task))
}
  return (
    <div className="main-container">
    <Header title="Track your tasks!"/>
    <Button onAdd = {()=> setToggleAddTask(!toggleAddTask)} showAddBtn={toggleAddTask}/>
    {toggleAddTask && <AddTask onAdd={addTask}/>}
    <div className="allTask-container">{tasks.length > 0 ? <Tasks className="" tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No tasks"}</div>
    </div>
    
  );
}

export default App;
