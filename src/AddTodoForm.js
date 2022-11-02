import React, { useState } from 'react'

function AddTodoForm(props) {
  // const [ titleInput, setTitleInput ] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    props.onAddTodo(todoTitle)
    event.target.title.value = "";
    // setTitleInput('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="search">Title </label>
      <input id="todoTitle" type="text" name="title" />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodoForm