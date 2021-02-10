import React, { useState } from 'react';
import './App.css';
// Importing Components
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  return (
    <div className="App">
      <header>
        <h1>Todolist</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus} />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
