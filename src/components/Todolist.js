import React from 'react';
// Import Components
import Todo from './Todo'

const Todolist = () => {
    return(
        <div className='todo-container'>
            <ul className='todo-list'>
                <Todo />
            </ul>
        </div>
    );
}

export default Todolist;