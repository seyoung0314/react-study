import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';
import styles from './scss/TodoItem.module.scss';
const TodoItem = () => {
  const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle } = styles;
  return (
    <li className={itemStyle}>
      <div className={checkCircle}>
        <MdDone />
      </div>
      <span className={text}>할 일 어쩌구~~</span>
      <div className={remove}>
        <MdDelete />
      </div>
    </li>
  );
};
export default TodoItem;