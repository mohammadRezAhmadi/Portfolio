import React from "react";
import { Pie } from "react-chartjs-2";

function ChartPie({ chartData }) {
  return (
    <div className="chart-container w-20 sm:w-24 text-white text-sm">
      <h2 style={{ textAlign: "center" }}>Language</h2>
      <Pie
        data={chartData}
      />
    </div>
  );
}
export default ChartPie;