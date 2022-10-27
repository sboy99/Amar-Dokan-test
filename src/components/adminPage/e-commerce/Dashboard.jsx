import React from "react";
import { useUser } from "../../../app/store";
import { overview } from "../../../data/dummy";
import { ArrowTrendingUpIcon, PlusIcon } from "@heroicons/react/24/outline";
import { LineChart, DonutChart } from "..";
import { Headline } from "..";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <main className="relative w-full">
      {/* head titles */}
      <Headline
        mainHeading={`Welcome back, ${user?.name}`}
        subHeading="Here's What's happening to your store today. These are some brief
          overview of your store."
      />
      {/* Grid Laylout */}
      <div className=" grid w-full grid-cols-1 gap-2 px-4 py-2 sm:grid-cols-2 lg:sticky lg:inset-x-0 lg:top-20 lg:grid-cols-3 xl:grid-cols-4">
        {overview.map((comp, index) => (
          <div key={comp?.title + index}>
            <div
              className={`pointer-events-none w-full rounded-lg p-4 shadow ${
                index === 0
                  ? `bg-gradient-to-r from-pink-400 to-violet-600 text-white`
                  : `bg-white text-slate-700`
              }`}
            >
              {/* Title */}
              <h4 className={`font-lexend text-lg tracking-tight`}>
                {comp?.title}
              </h4>
              {/* Value */}
              <h1 className="mt-1 flex items-center text-2xl font-semibold">
                {index === 0 ? `$` : <PlusIcon className="h-5 w-5" />}
                {comp.value}
              </h1>
              {/* Report */}
              <h6
                className={`flex flex-wrap items-center gap-x-2 text-sm capitalize ${
                  index === 0 ? `text-slate-300` : `text-slate-500`
                }`}
              >
                <span
                  className={`flex items-center gap-1 ${
                    index === 0 ? `text-emerald-300` : `text-emerald-500`
                  }`}
                >
                  <ArrowTrendingUpIcon className="h-4 w-4" /> {comp.trend}%
                </span>{" "}
                <span className={`flex items-center`}>
                  {<PlusIcon className="h-4 w-4" />}
                  {comp.weeklyIncrease}
                </span>
                Weekly increment
              </h6>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-x-2 divide-y divide-slate-300 py-2 lg:grid-cols-4 lg:divide-y-0">
        <div className="h-fit bg-white p-4 lg:col-span-3 lg:rounded-md">
          {/* line chart.. */}
          <LineChart />
        </div>
        <div className="min-h-[20rem] bg-white lg:rounded-md">
          {/* sales by category */}
          <DonutChart />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
