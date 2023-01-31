import React, { useState } from 'react'
import InputWithLabel from './InputWithLabel';
import styles from './CSS/AddTodoForm.module.css';


function AddTodoForm({ onAddTodo }) {
  const [ todoTitle, setTodoTitle ] = useState();

  const handleTitleChange = (event) => {    
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ id: Date.now(), title: todoTitle });
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleAddTodo} className={styles.titleFont}> 
      <InputWithLabel 
        todoTitle={onAddTodo.todoTitle} 
        handleTitleChange={handleTitleChange}
      >
        Title:
      </InputWithLabel>   
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodoForm