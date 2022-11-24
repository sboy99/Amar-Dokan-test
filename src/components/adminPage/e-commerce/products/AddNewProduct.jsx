import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../utils";
import { useDispatch } from "react-redux";
import { openProductForm } from "../../../../features";

const AddNewProduct = () => {
  const dispatch = useDispatch();

  const displayProductForm = () => {
    dispatch(openProductForm());
  };
  return (
    <div className="flex items-center gap-x-2">
      <Button className="rounded-full bg-slate-100 px-4 py-1 font-medium text-slate-600 hover:bg-amber-50 hover:text-slate-600 md:py-2 md:px-6 md:text-lg md:font-semibold">
        Analytics
      </Button>
      <Button
        onClick={displayProductForm}
        className="flex items-center gap-x-1 rounded-full bg-green-500 px-4 py-1 font-medium text-white transition-all duration-300 ease-in-out hover:bg-green-50 hover:text-green-500 md:px-6 md:py-2 md:text-lg md:font-semibold"
      >
        <PlusIcon className="h-6 w-6 font-bold" /> New Product
      </Button>
    </div>
  );
};

export default AddNewProduct;
