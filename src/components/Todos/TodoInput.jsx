import React, { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import styles from "./scss/TodoInput.module.scss";
const TodoInput = ({ onInput }) => {
  const {
    "form-wrapper": formWrapper,
    "insert-btn": insert,
    "insert-form": insertForm,
    open,
  } = styles;

  const [inputText, setInputText] = useState("");
  const [btnStatus, setBtnStatus] = useState(true);

  const handleClick = (e) => {
    setBtnStatus(!btnStatus);
  };

  useEffect(()=>{

  },btnStatus)

  const handleSubmit = (e) => {
    e.preventDefault();

    onInput({
      id : Math.random(),
      inputText : inputText,
      status : false
    });
    setInputText("");
  };

  const handleInput = e =>{
    const input = e.target.value;
    setInputText(input);
  };

  return (
    <>
      {!btnStatus ? (<div className={formWrapper}>
        <form className={insertForm} onSubmit={handleSubmit}>
          <input 
          onInput={handleInput}
          value={inputText}
          type="text" placeholder="할 일을 입력 후, 엔터를 누르세요!" />
        </form>
      </div>) : null}
      <button className={`${insert} ${!btnStatus ? open : ""}`}>
        <MdAdd onClick={handleClick} />
      </button>
    </>
  );
};
export default TodoInput;
