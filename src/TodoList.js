import React from 'react'
import TodoListItem from './TodoListItem';

const todoList = [
  {
    id: 1,
    title: 'Practice React'
  },
  {
    id: 2,
    title: 'Walk the dog'
  },
  {
    id: 3,
    title: "Tell dog she's a good girl!"
  }
];

function TodoList() {
  return (
    <ul>
      {todoList.map((item) => {
        return <TodoListItem key={item.id} todoList={todoList} />
      })}
    </ul>
  )
}

export default TodoList