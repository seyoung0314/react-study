import React, { useState } from "react";
import styles from "./scss/TodoMain.module.scss";
import TodoItem from "./TodoItem";
import { ImTerminal } from "react-icons/im";
const TodoMain = ({ items,onDelete,OnChangeCount }) => {
  
    const todo = items.map((item,index) => 
      <TodoItem key={item.id} item={item} onDelete={onDelete} OnChangeCount={OnChangeCount}/>
    );

  return (
    <ul className={styles["todo-list"]}>
      {todo}
    </ul>
  );
};
export default TodoMain;
