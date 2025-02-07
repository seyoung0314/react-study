import React, { useState } from "react";
import { MdDelete, MdDone } from "react-icons/md";
import styles from "./scss/TodoItem.module.scss";
const TodoItem = ({ item, onDelete, OnChangeCount }) => {
  const {
    text,
    remove,
    "todo-list-item": itemStyle,
    "check-circle": checkCircle,
    active,
    finish,
  } = styles;

  const { id, inputText, status } = item;

  const handleDelBtnClick = (e) => {
    onDelete(id);
  };

  const handleCheckBtnClick = (e) => {
    OnChangeCount(id);
  };

  return (
    <li className={itemStyle}>
      <div className={`${checkCircle} ${status ? active : ""}`} 
          onClick={handleCheckBtnClick}>
        {status && <MdDone />}
      </div>
      <span className={`${text} ${status ? finish : ""}`}>{inputText}</span>
      <div className={remove}>
        <MdDelete onClick={handleDelBtnClick} />
      </div>
    </li>
  );
};
export default TodoItem;
