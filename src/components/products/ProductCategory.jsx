import React from "react";
import { Categories } from "../../data";

const ProductCategory = () => {
  return (
    <div className="divide-y divide-slate-900/10">
      {Categories.map((category) => (
        <div
          key={category?.id}
          className="cursor-pointer p-2 tracking-tight text-slate-600 hover:text-sky-500"
        >
          {category?.name}
        </div>
      ))}
    </div>
  );
};

export default ProductCategory;
