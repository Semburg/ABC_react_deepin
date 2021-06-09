import React, { useState } from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30px',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food shopping',
      day: 'Feb 5th at 3:30pm',
      reminder: false,
    },
  ])

  const addTask = (task)=> {
    //test function
    console.log(task);

    // functionality for adding the input task to task array

    // just the every next number below depending on current array length - can be bad if we are deleting the tasks
    //const id = tasks.length ++

    //more complex id without other packages
    const id = Math.floor(Math.random()* 10000) + 1
    // test ID
    console.log(id);

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id
    ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header 
        showAddFields={()=> setShowAddTask(!showAddTask)} 
        showAdd = {showAddTask}
      />

     {showAddTask && <AddTask onAdd={addTask} />}

      { tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder} />)
        : ("No tasks to Show")
      }

    </div>
  );
}

export default App;
