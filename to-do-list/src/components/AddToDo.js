import React, { useState } from 'react';
import TaskList from './TaskList';
import './AddToDo.css'; 

const AddToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');

  const handleAddTask = () => {
    if (title.trim() && about.trim()) {
      const newTask = {
        id: tasks.length + 1,
        title: title,
        about: about
      };
      setTasks([...tasks, newTask]);
      setTitle('');
      setAbout('');
    } else {
      alert('Please enter both title and about.');
    }
  };

  return (
    <div className="container">
      <div className="input-container">
        <div className="input-column">
          <input
            className="input-box"
            type="text"
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="input-box"
            type="text"
            placeholder='About'
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        <button className="plus-button" onClick={handleAddTask}>+</button>
      </div>
      {/* Display tasks */}
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default AddToDo;
