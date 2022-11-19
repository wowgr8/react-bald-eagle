import React, { useState } from 'react'

function AddTodoForm(props) {
  const [ todoTitle, setTodoTitle ] = useState();

  const handleTitleChange = (event) => {    
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
    console.log(newTodoTitle);
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.todoTitle.value;
    props.onAddTodo(todoTitle)
    event.target.title.value = "";
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title </label>
      <input id="todoTitle" type="text" name="title" value={todoTitle} onChange={handleTitleChange}/>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodoForm