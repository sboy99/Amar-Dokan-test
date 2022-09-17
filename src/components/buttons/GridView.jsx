import React from "react";
import { Link } from "react-router-dom";
import { single_product_url } from "../../data";
import { formatToINR } from "../../utils";

const GridView = ({ products }) => {
  return (
    <div className="grid grid-flow-dense grid-cols-autofill-12 place-content-center gap-3">
      {products.map((product) => (
        <ProductComponent key={product?.id} {...product} />
      ))}
    </div>
  );
};

export default GridView;

function ProductComponent({ id, name, price, image, category }) {
  return (
    <Link
      to={`/products/${id}`}
      className="flex flex-col gap-y-2 overflow-hidden rounded-md "
    >
      {/* Image & price */}
      <div className="group relative h-72 w-full overflow-hidden rounded-md">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
        />
        {/* price */}
        <p className="absolute right-2 bottom-2 w-fit rounded-md bg-slate-50 px-4 py-1 text-center tracking-tighter text-slate-700 ">
          {formatToINR(price)}
        </p>
      </div>
      {/* Info */}
      <div className="flex flex-col gap-y-1 p-1">
        {/* name & category */}
        <div className="-space-y-1">
          <p className="font-inter text-lg font-semibold capitalize tracking-tight text-slate-800">
            {name}
          </p>
          <p className="font-inter text-sm capitalize text-slate-600">
            {category}
          </p>
        </div>
      </div>
    </Link>
  );
}
