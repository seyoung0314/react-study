import React from "react";

import "./ChartBar.css";

const ChartBar = ({chartData,totalValue}) => {
const {label,value} = chartData;

// console.log("chartData : ",chartData);
// console.log(label);

  // 월별 지출액 비율 구하기
  let barFillHeight = '0%';

  if (totalValue > 0) {
    const percentage = (value / totalValue) * 100;
    barFillHeight = percentage + '%';
  }


  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
      <div className='chart-bar__fill' style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;