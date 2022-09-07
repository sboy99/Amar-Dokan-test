import React from "react";
import { FeaturedProduct, ShopByCategory } from "../components";
import { useProductContext } from "../context/productContext";
import { RailsDecor } from "../utils";

const ProductPage = () => {
  const { isLoading, isSuccess } = useProductContext();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    isSuccess && (
      <section className="Product">
        {/* category college */}
        <div className="relative snap-start  bg-white">
          <ShopByCategory />
        </div>
        {/* featured products */}
        <div className="relative snap-start border-t-2 border-slate-900/5">
          <RailsDecor className="h-1/3" />
          <FeaturedProduct />
        </div>
        {/* products */}
      </section>
    )
  );
};

export default ProductPage;
