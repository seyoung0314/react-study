import React from 'react'
import ExpenseItem from './ExpenseItem.jsx'
import './ExpenseList.css';

const ExpenseList = (props) => {

  const {expenses} = props;
  return (
    <div className="expenses">
      <ExpenseItem expense={expenses[0]}/>
      <ExpenseItem expense={expenses[1]}/>
      <ExpenseItem expense={expenses[2]}/>
    </div>  
  )
}

export default ExpenseList