import React, { useState } from 'react'

function AddTodoForm(props) {
  const [ todoTitle, setTodoTitle ] = useState();

  const handleTitleChange = (event) => {    
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    props.onAddTodo({title: todoTitle, id: Date.now()});
    
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="title">Title </label>
      <input id="title" type="text" name="title" value={props.todoTitle} onChange={handleTitleChange}/>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodoForm