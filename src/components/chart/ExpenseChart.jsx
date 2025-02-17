import React from 'react';
import Chart from './Chart';

const ExpenseChart = ({expenses}) => {
  
  // console.log("expenses : ",expenses);
  
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

    expenses.forEach(ex => {
      const expenseMonth = ex.date.getMonth();
      chartDataPoints[expenseMonth].value += ex.price;
    });

  // console.log(chartDataPoints);
  
  return <Chart chartDataPoints = {chartDataPoints} />;
};

export default ExpenseChart;
