import React from "react";
import { useProductContext } from "../../context/productContext";
import Product from "./Product";

const FeaturedProduct = () => {
  const { getFeaturedProducts } = useProductContext();
  return (
    <div className="container mx-auto p-4 py-8 sm:py-16">
      <h1 className="font-lexend font-semibold text-indigo-600 md:text-xl">
        Trending Products
      </h1>
      <h1 className="font-lexend text-3xl font-extrabold tracking-tight text-slate-800 md:text-5xl">
        Only For You
      </h1>
      <p className="my-2 max-w-sm font-inter text-sm leading-5 tracking-tight text-slate-600 md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        sint tempore dolores.
      </p>
      <div className="mt-4 flex items-center gap-4 overflow-auto pb-4">
        {getFeaturedProducts().map((product, index) => (
          <Product key={product?.id | index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
