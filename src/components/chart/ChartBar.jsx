import React from "react";

import "./ChartBar.css";

const ChartBar = ({chartData}) => {
const {label,value} = chartData;

// console.log("chartData : ",chartData);
// console.log(label);


  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;