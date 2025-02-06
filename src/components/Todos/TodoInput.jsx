import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import styles from "./scss/TodoInput.module.scss";
const TodoInput = ({ onInput }) => {
  const {
    "form-wrapper": formWrapper,
    "insert-btn": insert,
    "insert-form": insertForm,
  } = styles;

  const [inputText, setInputText] = useState("");
  const [isvalid, setIsvaild] = useState(false);

  const handleClick = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    onInput({
      id : Math.random(),
      inputText : inputText,
    });
    setInputText("");
  };

  const handleInput = e =>{
    const input = e.target.value;
    setInputText(input);
  };

  return (
    <>
      <div className={formWrapper}>
        <form className={insertForm} onSubmit={handleSubmit}>
          <input 
          onInput={handleInput}
          value={inputText}
          type="text" placeholder="할 일을 입력 후, 엔터를 누르세요!" />
        </form>
      </div>
      <button className={insert}>
        <MdAdd onClick={handleClick} />
      </button>
    </>
  );
};
export default TodoInput;
