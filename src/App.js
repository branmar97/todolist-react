import React, { useState, useEffect } from 'react';
import './App.css';
// Importing Components
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  // State
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  // Use Effect
  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    
    filterHandler();
  }, [todos, status]);
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
      <Todolist todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
