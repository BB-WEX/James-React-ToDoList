import React, { useState } from 'react';
import Input from './input';

const TaskEditor = ({ task, onSave, onCancel }) => {
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    if (editedTitle.trim() === '' || editedDescription.trim() === '') return;
    onSave(task.id, editedTitle, editedDescription);
  };

  return (
    <div className="taskEditor">
        <div className='editorInputs'>
            <Input
                placeholder="Title"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
            />
            <Input
                placeholder="Description"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
            />
        </div>
        <div className="editorButtons">
            <button onClick={handleSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    </div>
  );
};

export default TaskEditor;