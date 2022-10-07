import React from "react";
import Product from "./Product";

const ProductSlider = ({ products = [] }) => {
  return (
    <div className="flex items-center gap-4 overflow-auto pb-4">
      {products.map((product, index) => (
        <Product key={product?.id || index} {...product} />
      ))}
    </div>
  );
};

export default ProductSlider;
