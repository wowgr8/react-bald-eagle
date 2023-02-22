import React from 'react';
import { ReactComponent as RedCheckMark } from '../SVG/done-checkmark.svg';
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';

function TodoListItem({ fields, onRemoveTodo, id }) {
  return (
    <div >
      <li className={styles.ul__align} >{fields.Title} </li> 
      <button type="button" onClick={() => onRemoveTodo(id)} className={styles.btn__align} >
        <RedCheckMark height="18px" width="18px" />
      </button>
    </div>
  )
}

TodoListItem.propTypes = {
  fields: PropTypes.object,
  onRemoveTodo: PropTypes.func.isRequired,
  id: PropTypes.string
}

export default TodoListItem