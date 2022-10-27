import React from "react";
import { Tip } from "../../../../utils";
import { PlusIcon } from "@heroicons/react/24/outline";
import SearchCategory from "./SearchCategory";
import { useLayout } from "../../../../app/store";

const AddCategory = () => {
  const { width } = useLayout();
  return (
    <div className="mt-2 min-h-16 w-full px-4 md:mt-0 md:flex md:items-center md:gap-x-4 lg:px-2 xl:justify-end">
      {/* search box */}
      <div className="relative md:flex-shrink-0">
        <SearchCategory />
      </div>
      {/* add category */}
      {width < 768 ? (
        <button className="mt-2 w-fit rounded-full bg-sky-500 px-4 py-1 font-bold capitalize text-white outline-white">
          New Category
        </button>
      ) : (
        <Tip tip={`New Category`}>
          <button className="rounded-full bg-white p-2 text-sky-500 outline-sky-500 transition-all duration-300 hover:bg-slate-100 ">
            <PlusIcon className="h-6 w-6" />
          </button>
        </Tip>
      )}
    </div>
  );
};

export default AddCategory;
