import React from "react";
import '../index.css'
import Task from "./Task"; 

const Tasks = ({tasks, onDelete, onToggle}) => {
  const content = tasks.map((item) => {
    return (
      <Task task={item} onToggle={onToggle} onDelete={onDelete}/>
    );
  });
  return <div>{content}</div>;
};

export default Tasks;
