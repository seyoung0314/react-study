import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ expense }) => {
  // console.log('props: ', props);
const { title, price, date } = expense;
  return (
    <div className='expense-item'>
      <ExpenseDate expenseDate={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{price}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;