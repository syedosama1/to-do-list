import React, { useState } from 'react';
import "./TaskItem.css"

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task ? task.title : "");
  const [editedAbout, setEditedAbout] = useState(task ? task.about : "");
  const [infoExpanded, setInfoExpanded] = useState(false); 
  const [showConfirmation, setShowConfirmation] = useState(false); 

  const handleUpdate = () => {
    onUpdate(task.id, editedTitle, editedAbout);
    setIsEditing(false);
  };

  const handleDelete = () => {
    setShowConfirmation(true); 
  };

  const confirmDelete = () => {
    onDelete(task.id);
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    setShowConfirmation(false); 
  };

  if (!task) {
    return <div className="no-tasks">No tasks</div>;
  }

  return (
    <div className="task-item">
      <div className="task-info">
        {infoExpanded ? (
          <>
            <span>Title: {task.title}</span>
            <span>About: {task.about}</span>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        ) : (
          <>
            <span>Title: {task.title}</span>
            <span>About: {task.about}</span>
          </>
        )}
      </div>
      <button className="info-button" onClick={() => setInfoExpanded(!infoExpanded)}>
        {infoExpanded ? "-" : "+"} Info
      </button>
      {isEditing && (
        <div className="edit-section">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="text"
            value={editedAbout}
            onChange={(e) => setEditedAbout(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this task?</p>
          <button onClick={confirmDelete}>Delete</button>
          <button onClick={cancelDelete}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
