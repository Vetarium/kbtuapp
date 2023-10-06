import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [todoDescription, setTodoDescription] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, todoText]);
      setTodoText('');
    }
    if (todoDescription.trim() !== '') {
      setTodos([...todos, todoDescription]);
      setTodoDescription('');
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new todo..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add description."
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;