import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import styles from "./scss/TodoTemplate.module.scss";
import TodoMain from "./TodoMain";
import TodoInput from "./TodoInput";
const TodoTemplate = () => {
  const [todoItems, setTodoItems] = useState([]);

  const onInput = (data) => {
    if(data){
      setTodoItems([...todoItems, data]);   
    }
  };

  const onDelete = (data) => {
    setTodoItems(todoItems.filter(item=>item!==data));
  };

  return (
    <div className={styles.TodoTemplate}>
      <TodoHeader />
      <TodoMain  items={todoItems} onDelete={onDelete}/>
      <TodoInput onInput={onInput} />
    </div>
  );
};
export default TodoTemplate;
