import React from 'react'

function InputWithLabel({ todoTitle, handleTitleChange }) {
  return (
    <>
      <label htmlFor="todoTitle">Title </label>
      <input id="todoTitle" type="text" name="title" value={todoTitle} onChange={handleTitleChange}/>
    </>
  )
}

export default InputWithLabel