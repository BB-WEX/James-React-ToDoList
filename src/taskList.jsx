import React from 'react';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <ul className='task'>
      {tasks.map((task, index) => (
        <li key={task.id} className='taskItem'>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span>
            <h2>Task {index + 1}</h2><p></p> <div className='taskContent'>{task.title} – {task.description}</div>
          </span>
          <button onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;