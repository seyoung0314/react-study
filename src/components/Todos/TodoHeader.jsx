import React, { useState } from 'react'
import styles from './scss/TodoHeader.module.scss'
import TodoTemplet from './TodoTemplate';

export const TodoHeader = ({count}) => {

  const { day, 'tasks-left': left } = styles;
  
  const date = new Date();
  const today = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`;
  const week = `${date.toLocaleString('ko-KR', { weekday: 'long' })}`;
  
  return (
    <header>
      <h1>{today}</h1>
      <div className={day}>{week}</div>
      <div className={left}>할 일 {count}개 남음</div>
    </header>
  );
}
export default TodoHeader;