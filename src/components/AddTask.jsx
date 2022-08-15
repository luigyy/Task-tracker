import React from "react";
import "../index.css";
import { useState } from "react";

const AddTask = ({onAdd}) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!task) {
      alert('You need to ask a task!')
      return;
    }
    onAdd(task, date, reminder);

    //clean
    setTask('')
    setDate('')
    setReminder(false)
  };

  const onTaskChange = (value) => {
    setTask(value);
  };

  const onDateChange = (value) => {
    setDate(value);
  };

  const onReminderChange = (value) => {
    setReminder(value);
  };



  return (
    <form className="form-control" onSubmit={handleSubmit} >
      <div className="">
        <div className="form">
          <label htmlFor="">Task</label>
          <input
            value={task}
            placeholder="Add Task"
            type="text"
            onChange={(e) => onTaskChange(e.target.value)}
            required
          />
        </div>
        <div className="form">
          <label htmlFor="">Day & time</label>
          <input
            value={date}
            placeholder="Add Day & Time"
            type="text"
            onChange={(e) => onDateChange(e.target.value)}
            required
          />
        </div>
        <div className="form-checkbox">
          <label htmlFor="">Reminder</label>
          <input 
            onChange={(e) => onReminderChange(e.currentTarget.checked)}
            value={reminder}
            type="checkbox" />
        </div>
        <input
          className="btn-block"
          type="submit"
          value="Save Task"
        />
      </div>
    </form>
  );
};

export default AddTask;
