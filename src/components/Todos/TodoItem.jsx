import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';
import styles from './scss/TodoItem.module.scss';
const TodoItem = ({item,onDelete}) => {
  const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle } = styles;

  const {id, inputText} = item;

const handleDelBtnClick = e =>{
  onDelete(id);
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