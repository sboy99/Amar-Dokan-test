import React from "react";
import { useSelector } from "react-redux";
import { products } from "../app/store";
import { FeaturedProduct, ShopByCategory, ViewProducts } from "../components";
import { RailsDecor, StarsDecor } from "../utils";

const ProductPage = () => {
  const { isLoading, isSuccess } = useSelector(products);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    isSuccess && (
      <section className="Product">
        {/* category college */}
        <div className="relative bg-white">
          <ShopByCategory />
        </div>
        {/* featured products */}
        <div className="relative overflow-hidden border-t-2 border-slate-900/5">
          <RailsDecor className="h-1/3" />
          <FeaturedProduct />
        </div>
        {/* products */}
        <div className="relative min-h-64 overflow-hidden ">
          <StarsDecor
            className="h-full scale-x-105"
            bgColor={`bg-gradient-to-t from-rose-500/20 to-white h-3/4`}
          />
          <ViewProducts />
        </div>
      </section>
    )
  );
};

export default ProductPage;
