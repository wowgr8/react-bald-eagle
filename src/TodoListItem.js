import React from 'react'

function TodoListItem({ fields, onRemoveTodo, id }) {
  return (
    <>
      <li>{fields.Title}</li>
      <button type="button" onClick={() => onRemoveTodo(id)} >
        Remove
      </button>
    </>
  )
}

export default TodoListItem