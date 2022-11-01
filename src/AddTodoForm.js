import React from 'react'

function AddTodoForm() {
  const handleAddTodo = (event) => {

  }

  return (
    <form>
      <label htmlFor="search">Title </label>
      <input id="todoTitle" type="text" name="title"></input>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodoForm