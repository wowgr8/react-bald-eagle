import React from 'react';
import { ReactComponent as RedCheckMark } from './SVG/done-checkmark.svg';
import styles from './CSS/TodoListItem.module.css';

function TodoListItem({ fields, onRemoveTodo, id }) {
  console.log(fields)
  console.log(fields.Title)
  return (
    <div >
      <li className={styles.ul__align} >{fields.Title} </li>
      <button type="button" onClick={() => onRemoveTodo(id)} className={styles.btn__align} >
        <RedCheckMark height="18px" width="18px" />
      </button>
    </div>
  )
}

export default TodoListItem