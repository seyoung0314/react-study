import React, { useState } from "react";
import styles from "./scss/TodoMain.module.scss";
import TodoItem from "./TodoItem";
const TodoMain = ({ items }) => {

    const todo = items.map((item,index) => 
      <TodoItem key={index} inputText={item}/>
    );

    console.log(todo);
    

  return (
    <ul className={styles["todo-list"]}>
      {todo}
    </ul>
  );
};
export default TodoMain;
