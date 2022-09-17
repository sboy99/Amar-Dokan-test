import React from "react";
import { ProductMenu, ProductList, Sort } from "..";

const ViewProducts = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex w-full flex-col md:flex-row md:gap-x-8">
        {/* Product Menu & Filter for large */}
        <div className="hidden h-fit flex-shrink-0 transform transition-all duration-700 ease-in-out lg:block">
          <ProductMenu />
        </div>
        {/* Filter Product List */}
        <div className="min-h-screen-75 flex-auto rounded-lg bg-white shadow shadow-stone-500/25">
          <Sort />
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
