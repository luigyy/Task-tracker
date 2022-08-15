import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { FaRegImage } from "react-icons/fa";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [state, setState] = useState([
    {
      id: 1,
      task: "tarea tarea tarea",
      day: "6 abr at 10pm",
      reminder: false,
    },
    {
      id: 2,
      task: "test test test",
      day: "5 feb at 5pm",
      reminder: true,
    },
    {
      id: 3,
      task: "do the laundry",
      day: "10 may at 5pm",
      reminder: true,
    },
  ]);
   
  const showAddForm = () => {
    setShowAddTask(!showAddTask)
  }

  const deleteTask = (id) => {
    setState(state.filter((item) => item.id !== id));
  };

   const onToggle = (id) => {
    setState(state.map((item) =>
        item.id === id ? { ...item, reminder: !item.reminder } : item
      )
    );
  };

  const onAdd = (task, date, reminder) => {
    const id = Math.floor(Math.random()*1000) + 1;

    const taskObject = {
      id: id,
      task: task,
      day: date,
      reminder: reminder 
    }
    setState([...state, taskObject]);
  }

  return (
    <div style={{ border: "3px solid black", margin: "30px"}}>
      <Header showAddTask={showAddTask} showAddForm={showAddForm}/>

      { showAddTask ? <AddTask onAdd={onAdd}/> : <hr/>}

      {state.length > 0 ? (
        <Tasks tasks={state} onToggle={onToggle} onDelete={deleteTask} />
      ) : (
        <h3>No Tasks</h3>
      )}
    </div>
  );
}

export default App;
