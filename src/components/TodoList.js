import React from 'react'
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((item) => {
        return <TodoListItem key={item.id} {...item} onRemoveTodo={onRemoveTodo} />
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func
}

export default TodoList