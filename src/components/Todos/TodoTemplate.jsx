import React, { useState,useEffect  } from "react";
import TodoHeader from "./TodoHeader";
import styles from "./scss/TodoTemplate.module.scss";
import TodoMain from "./TodoMain";
import TodoInput from "./TodoInput";
const TodoTemplate = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [count, setCount] = useState(0);

  const countingChecked = () => {
    let count = 0;
    todoItems.forEach((item) => {
      if (item.status === false) {
        count++;
      }
    });
    return count;
  };

  const changeCount = (data) => {
    setTodoItems(
      todoItems.map((item) => {
      if (item.id === data.id) {
        return data;
      }
      return item;
    }));
  };

  useEffect(() => {
    setCount(countingChecked());
  }, [todoItems]); 

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
      <TodoHeader count={count} items={todoItems}/>
      <TodoMain
        items={todoItems}
        onDelete={onDelete}
        changeCount={changeCount}
      />
      <TodoInput onInput={onInput} />
    </div>
  );
};
export default TodoTemplate;
