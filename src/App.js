import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [ todoList, setTodoList ] = useState(JSON.parse(localStorage.getItem("savedTodoList")));

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList])
  

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;