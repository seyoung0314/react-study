import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';
import styles from './scss/TodoItem.module.scss';
const TodoItem = ({inputText,onDelete}) => {
  const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle } = styles;

  

const handleDelBtnClick = e =>{
  onDelete(inputText);
}

  return (
    <li className={itemStyle}>
      <div className={checkCircle}>
        <MdDone />
      </div>
      <span className={text}>{inputText}</span>
      <div className={remove}>
        <MdDelete onClick={handleDelBtnClick}/>
      </div>
    </li>
  );
};
export default TodoItem;