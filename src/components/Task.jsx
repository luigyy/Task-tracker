import React from 'react';
import '../index.css';
import { FaTimes } from 'react-icons/fa';

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={task.reminder ? 'task-reminder': 'task'} onDoubleClick={() => onToggle(task.id)}>
           <h3 key={task.id}> 
           {task.task} <FaTimes style={{cursor: "pointer", color: 'red'}} onClick={(e) => onDelete(task.id)}/>
           </h3> 
           <p>{task.day}</p>
        </div>
    );
}

export default Task;
