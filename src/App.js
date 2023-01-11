import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [ todoList, setTodoList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      }
    })
    .then((response) => response.json())
    .then((result) => {
      setTodoList(result.records);
      setIsLoading(false)
    })
  },[]);
  
  useEffect(() => {
    if( isLoading === false ){
      localStorage.setItem("todoList", JSON.stringify(todoList));
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
      {isLoading 
        ? (<p>Loading...</p>)
        : (<TodoList todoList={todoList} onRemoveTodo={removeTodo} />)
      }
    </>
  );
}

export default App;