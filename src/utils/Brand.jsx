import React from "react";
import { CubeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <Link
      to={"/"}
      className="flex items-center gap-4 border-0 outline-none focus:outline-none"
    >
      <CubeIcon className="h-9 w-9 -rotate-90 text-indigo-600 dark:text-blue-500" />
      <div className="flex flex-col justify-center font-bold">
        <h2 className="-ml-1 text-xl text-indigo-600 dark:text-blue-500">
          Amar
        </h2>
        <h1 className="-mt-3 text-2xl text-slate-600">Dokan</h1>
      </div>
    </Link>
  );
};

export default Brand;
