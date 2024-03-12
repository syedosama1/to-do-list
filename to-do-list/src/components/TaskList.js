import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

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
      {tasks.length === 0 ? ( // Check if tasks array is empty
        <div className="no-tasks">No tasks</div>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
