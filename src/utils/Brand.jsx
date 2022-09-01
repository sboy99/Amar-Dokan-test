import React from "react";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <Link
      to={"/"}
      className="flex items-end gap-2 border-0 outline-none focus:outline-none"
    >
      <HomeModernIcon className="h-9 w-9  text-indigo-700 dark:text-blue-500" />
      <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-stone-700">
        <h2 className="">Amar</h2>
        <h1 className="">Dokan</h1>
      </div>
    </Link>
  );
};

export default Brand;
