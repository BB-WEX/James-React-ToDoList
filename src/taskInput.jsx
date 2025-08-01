import React, { useState } from 'react';
import Input from './input';

const TaskInput = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (title.trim() === '' || description.trim() === '') return;
    onAdd(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <div className='taskInputDiv'>
      <div className='inputDiv'>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default TaskInput;