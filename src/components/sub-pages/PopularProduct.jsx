import React from "react";
import { furniture } from "../../data";

const PopularProduct = () => {
  return (
    <div className="container mx-auto flex flex-col gap-4 p-4 py-12 md:py-16">
      <h1 className="max-w-2xl">
        <p className="text-lg font-semibold text-indigo-600 md:text-2xl">
          Products
        </p>
        <p className="inline-block font-poppins text-4xl font-extrabold capitalize tracking-tighter text-slate-900 md:text-6xl">
          Our Popular products
        </p>
        {/* desc */}
        <p className="mt-2 tracking-tight text-stone-600 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ducimus
          cumque voluptate itaque consectetur minima vero autem alias recusandae
          voluptas?
        </p>
        <div className="flex items-center gap-4">
          <button className="mt-4 rounded-md bg-stone-800 py-2  px-4 font-semibold capitalize text-stone-50 outline-none transition-all duration-200 hover:bg-stone-700 md:text-xl">
            Start Shopping
          </button>
          <button className="mt-4 rounded-md border border-stone-800/50 bg-stone-200/50 py-2  px-4 font-semibold capitalize text-stone-600 outline-none transition-all duration-200 hover:bg-stone-100 md:text-xl">
            Explore all
          </button>
        </div>
      </h1>

      <div className="mt-4 flex flex-col gap-6">
        <div className="flex w-80 shrink-0 flex-col gap-2 rounded-md ">
          <img
            src={furniture}
            alt=""
            className="h-96 rounded-md object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <div className="flex items-start justify-between ">
            <div className="">
              <p className="text-xl font-medium text-stone-800">Albani Chair</p>
              <p className="text-sm text-stone-500">Wooden</p>
            </div>
            <p className="text-xl font-semibold text-stone-800">$69</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
