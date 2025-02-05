import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ chartDataPoints }) => {
  // console.log("chartDataPoints : ", chartDataPoints);

  // 연도 지출 총액, 해당월지출액만 전송
  // function calcTotal() {
  //   let total = 0;
  //   for (const dp of chartDataPoints) {
  //     total += dp.value;
  //   }
  //   return total;
  // }
  const totalValue = chartDataPoints.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div className="chart">
      {chartDataPoints.map((item) => (
        <ChartBar
          key={Math.random()}
          chartData={item}
          totalValue={totalValue}
        />
      ))}
    </div>
  );
};
export default Chart;
