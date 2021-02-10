import React from 'react';
import './App.css';
// Importing Components
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todolist</h1>
      </header>
      <Form />
      <Todolist />
    </div>
  );
}

export default App;
