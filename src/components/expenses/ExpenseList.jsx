import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "../chart/ExpenseChart";

const ExpenseList = ({ expenses }) => {
  // ExpenseFilter에서 선택한 연도값을 여기서 출력
  const [year, setYear] = useState(new Date().getFullYear().toString());

  // 연도를 끌어올리기 위한 함수
  const onFilterChange = (filteredYear) => {
    console.log(`선택된 끌어올려진 연도: ${filteredYear}`);
    setYear(filteredYear);
  };

  // const createItemArray = () => {
  //   // expenses라는 객체배열을 ExpenseItem컴포넌트 배열로 변환

  //   return expenses.map(ex => <ExpenseItem expense={ex} />);
  // };

  //지출 데이터가 없을 때 보여줄 컴포넌트
  let content = <p>데이터가 없습니다.</p>;

  // 있을 때
  let filteredExpenses = expenses
    .filter((ex) => ex.date.getFullYear().toString() === year);

  if (filteredExpenses.length > 0) {
    content = filteredExpenses.map((ex) => <ExpenseItem key={Math.random()} expense={ex} />);
  }

  return (
    <div className="expenses">
      <ExpenseFilter onChangeFilter={onFilterChange} />
      <ExpenseChart expenses ={filteredExpenses}></ExpenseChart>
      {content}
    </div>
  );
};

export default ExpenseList;
