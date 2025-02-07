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


  // 원본객체를 수정하게되면 불변성이 깨질수잇음
  // const OnChangeCount = (id) => {
  //   setTodoItems(
  //     todoItems.map((item) => {
  //     if (item.id === id) {
  //       item.status = !item.status;
  //     }
  //     return item;
  //   }));
  // };
  
  // 이렇게 새로운 객체로 반환해주어야함
  // 상태변수의 setter는 이전상태값을 콜백 파라미터로 사용가능
  const OnChangeCount = (id) => {
    setTodoItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, status: !item.status }; 
        }
        return item;
      });
    });
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
        OnChangeCount={OnChangeCount}
      />
      <TodoInput onInput={onInput} />
    </div>
  );
};
export default TodoTemplate;
