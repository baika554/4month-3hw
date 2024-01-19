import React, { useState } from 'react';
import './ToDo.css'; 

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div className="todo-app">
      <h1>СПИСОК ЗАДАЧ И ДЕЛ</h1>
      <div className="add-task-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Введите задачу"
        />
        <button onClick={addTask}>Добавить задачу</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;