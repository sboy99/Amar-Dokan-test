import React from "react";
import { Link } from "react-router-dom";
import { formatToINR } from "../../utils";
import { TruckIcon } from "@heroicons/react/24/outline";

const ListView = ({ products = [] }) => {
  return (
    <div className="flex w-full flex-col divide-y divide-slate-200 py-4 ">
      {products.map((product) => (
        <ProductComponent key={product?.id} {...product} />
      ))}
    </div>
  );
};

export default ListView;

const ProductComponent = ({
  id,
  name,
  category,
  price,
  image,
  description,
  shipping,
}) => {
  return (
    <Link
      to={`/products/${id}`}
      className="group flex w-full cursor-pointer gap-x-4 overflow-hidden rounded-md bg-white  p-2 hover:bg-slate-50 "
    >
      {/* image */}
      <div className="flex-shrink-0 transition duration-300 group-hover:scale-105 ">
        <img
          src={image}
          alt={name}
          className="h-32 w-28 rounded-md object-cover object-center lg:w-44"
        />
      </div>
      {/* info */}
      <div className="flex-auto pb-1">
        <h1 className="-space-y-1">
          <p className="font-inter text-lg font-semibold capitalize tracking-tight text-slate-800 lg:text-xl">
            {name}
          </p>
          <p className="text-sm lowercase text-slate-500 lg:text-base">
            {category}
          </p>
        </h1>
        <h1 className="flex items-center divide-x divide-slate-300 ">
          <p className="pr-2 font-inter tracking-tight text-slate-800 sm:text-lg ">
            {formatToINR(price)}
          </p>
          {shipping && (
            <p className="hidden items-center gap-x-2 pl-2 capitalize text-sky-600 sm:flex">
              <TruckIcon className="h-6 w-6" />
              free
            </p>
          )}
        </h1>
        <p className="text-sm leading-4 text-slate-600 line-clamp-2 sm:line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
};
