import React from 'react';
import { MdAdd } from 'react-icons/md';
import styles from './scss/TodoInput.module.scss';
const TodoInput = () => {

  const {'form-wrapper':formWrapper, 'insert-btn':insert, 'insert-form':insertForm} = styles;

  return (
    <>
      <div className={formWrapper}>
        <form className={insertForm}>
          <input
            type='text'
            placeholder='할 일을 입력 후, 엔터를 누르세요!'
          />
        </form>
      </div>
      <button className={insert}>
        <MdAdd />
      </button>
    </>
  );
};
export default TodoInput;