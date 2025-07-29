import React, { useState } from 'react';
import TaskInput from './taskInput';
import TaskList from './taskList';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newTitle, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, title: newTitle, description: newDescription }
          : task
      )
    );
  };

  return (
    <div className="taskDiv">
      <h1>Welcome!</h1>
      <p>Total Tasks: {tasks.length}</p>

      <h2>Add Task</h2>
      <TaskInput onAdd={addTask} />

      <h3>Your Task List</h3>
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
        onEdit={editTask}
      />
    </div>
  );
};

export default TaskApp;