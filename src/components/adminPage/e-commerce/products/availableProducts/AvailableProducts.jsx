import React from "react";
import { Button } from "../../../../../utils";
import { Squares2X2Icon, ListBulletIcon } from "@heroicons/react/24/outline";
import { FilterByCategory } from "../../..";
import DisplayProducts from "./DisplayProducts";

const AvailableProducts = () => {
  return (
    <div className="mt-2 w-full rounded-md bg-white px-4 pb-6">
      {/* Menu Bar */}
      <div className=" flex items-center justify-between gap-x-2 border-b border-slate-300/50 px-4 py-2">
        {/* Filter By Category */}
        <FilterByCategory />
        {/* Action Buttons */}
        <div className="flex items-center gap-x-2">
          <Button
            className="rounded-full p-2 text-slate-700 hover:bg-teal-50 hover:text-teal-500"
            hover="Grid View"
          >
            <Squares2X2Icon className="h-6 w-6" />
          </Button>

          <Button
            className="rounded-full p-2 text-slate-700 hover:bg-teal-50 hover:text-teal-500"
            hover="Grid View"
          >
            <ListBulletIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Display Products */}
      <div className="relative overflow-auto pb-4">
        <DisplayProducts />
      </div>
    </div>
  );
};

export default AvailableProducts;
