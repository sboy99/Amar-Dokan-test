import React from "react";
import { Link } from "react-router-dom";
import { formatToINR } from "../../utils";

const Product = ({
  id,
  name,
  image,
  price,
  company,
  description,
  category,
}) => {
  return (
    <Link to={`/products/${id}`} className="w-64  shrink-0 bg-white pb-2">
      <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg ">
        <img
          src={image}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center transition-all duration-150 hover:scale-105 hover:opacity-90"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 py-4">
        <h1 className="flex items-center justify-between">
          <p className="font-lexend text-lg font-semibold capitalize leading-5  text-slate-900/80">
            {name}
          </p>
          <p className="rounded-lg bg-slate-100 px-4 py-1 text-lg font-semibold text-slate-900/75">
            {formatToINR(price)}
          </p>
        </h1>
        <p className="max-w-sm font-inter text-sm leading-5 text-slate-600 line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Product;
