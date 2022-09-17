import React from "react";
import { useSelector } from "react-redux";
import { layout, products } from "../../app/store";
import { GridView, ListView } from "../../components";

const ProductList = () => {
  const { gridView } = useSelector(layout);
  const { filteredProducts } = useSelector(products);
  return (
    <div className="h-[44rem] overflow-y-auto p-4">
      {gridView ? (
        <GridView products={filteredProducts} />
      ) : (
        <ListView products={filteredProducts} />
      )}
    </div>
  );
};

export default ProductList;
