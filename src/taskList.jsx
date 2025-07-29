import React, { useState } from 'react';
import TaskEditor from './taskEditor';

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
  const [editingId, setEditingId] = useState(null);

  return (
    <ul className="task">
      {tasks.map((task, index) => (
        <li key={task.id} className="taskItem">
          {editingId === task.id ? (
            <TaskEditor
              task={task}
              onSave={(id, newTitle, newDescription) => {
                onEdit(id, newTitle, newDescription);
                setEditingId(null);
              }}
              onCancel={() => setEditingId(null)}
            />
          ) : (
            <>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
              />
              <span>
                <h2>Task {index + 1}</h2>
                <div className="taskContent">
                  {task.title} – {task.description}
                </div>
              </span>
              <div className="taskButtons">
                <button onClick={() => setEditingId(task.id)}>Edit</button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;