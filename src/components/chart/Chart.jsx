import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ chartDataPoints }) => {
  // console.log("chartDataPoints : ", chartDataPoints);

  return (
    <div className="chart">
      {chartDataPoints.map((item) => (
        <ChartBar key={Math.random()} chartData={item} />
      ))}
    </div>
  );
};
export default Chart;
