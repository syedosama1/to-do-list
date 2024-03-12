import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css'; // Import your CSS file where you define styles

const TaskList = ({ tasks, setTasks }) => {
  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleUpdate = (taskId, updatedTitle, updatedAbout) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, title: updatedTitle, about: updatedAbout };
      }
      return task;
    }));
  };

  return (
    <div className="tasks-container">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default TaskList;
