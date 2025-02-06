import React, { useState } from "react";
import styles from "./scss/TodoMain.module.scss";
import TodoItem from "./TodoItem";
const TodoMain = ({ items,onDelete }) => {

    const todo = items.map((item,index) => 
      <TodoItem key={index} inputText={item} onDelete={onDelete}/>
    );

  return (
    <ul className={styles["todo-list"]}>
      {todo}
    </ul>
  );
};
export default TodoMain;
