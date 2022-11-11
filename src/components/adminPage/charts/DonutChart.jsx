import React from "react";
import { salesByCategory } from "../../../data/dummy";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
ChartJS.register(ArcElement);

const DonutChart = () => {
  const data = {
    labels: salesByCategory.map((c) => c.category),
    datasets: [
      {
        data: salesByCategory.map((v) => v.value),
        backgroundColor: salesByCategory.map((bg) => bg.color),
        borderColor: salesByCategory.map((border) => border.color),
      },
    ],
  };

  return (
    <div className="p-4">
      <h1 className="flex flex-wrap items-center justify-between whitespace-nowrap font-inter text-lg font-semibold text-slate-800">
        Sales by Category{" "}
        <span className="rounded-full p-2 hover:bg-slate-100">
          <ArrowRightIcon className="h-5 w-5" />
        </span>
      </h1>
      <div className="mx-auto max-w-sm p-6">
        <Doughnut data={data} />
      </div>
      {/* legends */}
      <div className="grid grid-cols-2 lg:grid-cols-1">
        {salesByCategory.map((sale, index) => (
          <p
            key={sale.value + index}
            className="flex items-center gap-x-2 font-medium text-slate-700"
          >
            <span
              style={{ backgroundColor: sale.color }}
              className="h-2 w-2 rounded-full"
            ></span>
            {sale.category}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
