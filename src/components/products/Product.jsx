import React from "react";

const Product = ({ name, image, price, company, description, category }) => {
  return (
    <div className="w-64  shrink-0 bg-white pb-2">
      <div className="overflow-hidden rounded-lg ">
        <img
          src={image}
          loading="lazy"
          decoding="async"
          className="h-80 w-64 object-cover object-center transition-all duration-150 hover:scale-105 hover:opacity-90"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 py-4">
        <h1 className="flex items-center justify-between">
          <p className="font-lexend text-lg font-semibold capitalize leading-5 tracking-tight text-slate-800">
            {name}
          </p>
          <p className="rounded-lg bg-slate-100 px-4 py-1 text-xl font-semibold text-slate-900">
            ${price}
          </p>
        </h1>
        <p className="max-w-sm font-inter text-sm leading-5 text-slate-600 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Product;
