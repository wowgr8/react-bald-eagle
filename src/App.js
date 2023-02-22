import React, { useState, useEffect } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './App.module.css';

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
      result.records.sort(function(objectA, objectB){
        if (objectA.fields.Title < objectB.fields.Title) {
          return -1;
        } else if (objectA.fields.Title > objectB.fields.Title) {
          return 1;
        } else {
          return 0;
        }
      })
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
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Title: newTodo[0].title,
        },
        typecast: true,
      })
    })
    .then((response) => response.json())
    .then((data) => {
      setTodoList([...todoList, data]);
    })
  };

  const removeTodo = (id) => {
    const filteredTodoList = todoList.filter(
      (item) => id !== item.id
    );

    setTodoList(filteredTodoList);
  }

  return (
    <div className={styles.bgColor}>
      <BrowserRouter>
        <Routes >
          <Route path='/' exact element={
            <div>
              <h1 className={styles.titleFont}>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading 
                ? (<p>Loading...</p>)
                : (<TodoList todoList={todoList} onRemoveTodo={removeTodo} />)
              }
            </div>
          } />
          <Route path='/new' exact element={<h1>New Todo List</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;