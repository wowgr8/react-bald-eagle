import React, { useState } from 'react'
import InputWithLabel from './InputWithLabel';
import styles from './AddTodoForm.module.css';
import PropTypes from 'prop-types';


function AddTodoForm({ onAddTodo }) {
  const [ todoTitle, setTodoTitle ] = useState('');

  const handleTitleChange = (event) => {    
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo([{ id: Date.now(), title: todoTitle }]); 
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleAddTodo} className={styles.titleFont}> 
      <InputWithLabel 
        todoTitle={todoTitle} 
        handleTitleChange={handleTitleChange}
      >
        Title:
      </InputWithLabel>   
      <button type="submit">Add</button>
    </form>
  )
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
}

export default AddTodoForm