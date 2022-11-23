import React, { useState } from 'react'

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
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title </label>
        {/* is the value correct? If it's left as todoTitle, it's no longer a controlled form */}
      <input id="todoTitle" type="text" name="title" value={onAddTodo.todoTitle} onChange={handleTitleChange}/>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodoForm