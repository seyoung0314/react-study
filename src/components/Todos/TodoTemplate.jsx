import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import styles from "./scss/TodoTemplate.module.scss";
import TodoMain from "./TodoMain";
import TodoInput from "./TodoInput";
const TodoTemplate = () => {
  const [todoItems, setTodoItems] = useState([{id:"s",inputText:"ddd"}]);
  const [count, setCount] = useState(0);

  const changCount = (count) => {
    setCount(count);
  };

  const onInput = (data) => {
    if (data) {
      setTodoItems([...todoItems, data]);
      setCount(count + 1);
    }
  };

  const onDelete = (data) => {

    setTodoItems(todoItems.filter((item) => item.id !== data));
    setCount(count - 1);
  };

  return (
    <div className={styles.TodoTemplate}>
      <TodoHeader count={count} />
      <TodoMain items={todoItems} onDelete={onDelete} />
      <TodoInput onInput={onInput} />
    </div>
  );
};
export default TodoTemplate;
