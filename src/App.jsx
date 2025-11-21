import React, { useState, useEffect } from 'react'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'


export default function App() {
  const [tasks, setTasks] = useState([]);


  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  });


  const addTask = (task)=>{
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = () => {

  }

  return (
    <div>
      <header>
        <h1>TaskMan</h1>
        <p><i>Your friendly Task Manager</i></p>
      </header>
      <TaskForm addTask = {addTask}/>
      <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
      <ProgressTracker />
      <button>clear All Tasks</button>
    </div>
  )
}
