import React from "react";
import { Line } from "react-chartjs-2";
import { monthlyReport } from "../../../data/dummy";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip
);

const LineChart = () => {
  const data = {
    labels: monthlyReport.map((m) => m.month),
    datasets: [
      {
        label: `Orders`,
        data: monthlyReport.map((o) => o.orders),
        backgroundColor: `transparent`,
        borderColor: `rgb(30,58,138)`,
        pointBorderColor: `transparent`,
        borderWidth: 2,
        tension: 0.6,
      },
      {
        label: `Revenue`,
        data: monthlyReport.map((r) => r.revenue),
        backgroundColor: `transparent`,
        borderColor: `rgb(190,242,100)`,
        pointBorderColor: `transparent`,
        borderWidth: 2,
        tension: 0.5,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        border: `none`,
        ticks: {
          stepSize: 500,
          callback: (value) =>
            value >= 1000 ? (value / 1000).toFixed(1) + `K` : value,
        },
        grid: {
          borderDash: [5],
        },
      },
    },
  };

  return (
    <>
      <div className="mb-2 flex flex-wrap items-center justify-between ">
        {/* chart tittle */}
        <h3 className="font-inter text-lg font-semibold tracking-tight text-slate-800">
          Revenue vs Orders
        </h3>
        {/* legends */}
        <span className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-1">
            {/* color & legend */}
            <div className="h-2 w-2 rounded-full bg-lime-400"></div>
            <p className="text-sm text-slate-600 ">Revenue</p>
          </div>
          <div className="flex items-center gap-x-1">
            {/* color & legend */}
            <div className="h-2 w-2 rounded-full bg-blue-800"></div>
            <p className="text-sm text-slate-600 ">Orders</p>
          </div>
        </span>
      </div>
      <Line data={data} className="max-h-64 max-w-7xl" options={options} />
    </>
  );
};

export default LineChart;
