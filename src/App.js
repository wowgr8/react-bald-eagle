import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [ newTodo, setNewTodo ] = useState();
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;