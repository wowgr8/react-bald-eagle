import React, { useState } from 'react'

function AddTodoForm(props) {
  const [ todoTitle, setTodoTitle ] = useState();

  const handleTitleChange = (event) => {    
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
    console.log(newTodoTitle)
  }

  const handleAddTodo = (event) => {
    console.log("test00")
    event.preventDefault();
    console.log("test0")
    props.onAddTodo({title: todoTitle, id: Date.now()});
    console.log("test1")
    
    setTodoTitle("");
    console.log("test2")
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