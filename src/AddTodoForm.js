import React, { useState } from 'react'

function AddTodoForm(props) {
  const [ todoTitle, setTodoTitle ] = useState();

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.title.value;
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