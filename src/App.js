import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [ todoList, setTodoList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("todoList")) || [],
          }
        });
      }, 2000);
    })
    .then((result)=>{
      setTodoList([...result.data.todoList]);
    })
  },[]);
  
  useEffect(() => {
    if( isLoading === false ){
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  const removeTodo = (id) => {
    const filteredTodoList = todoList.filter(
      (item) => id !== item.id
    );

    setTodoList(filteredTodoList);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;