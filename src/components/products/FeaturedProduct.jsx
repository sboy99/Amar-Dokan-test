import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useProductContext } from "../../context/productContext";
import { getFeaturedProducts } from "../../features";
import { products } from "../../app/store";
import { useEffect } from "react";
import { ProductSlider, CompHeaderText } from "..";
import { HeaderTexts } from "../../data";

const FeaturedProduct = () => {
  const dispatch = useDispatch();
  const { featuredProducts } = useSelector(products);
  useEffect(() => {
    if (featuredProducts.length === 0) dispatch(getFeaturedProducts());

    //eslint-disable-next-line
  }, []);

  return (
    <div className="container mx-auto p-4 py-8 sm:py-16">
      <CompHeaderText {...HeaderTexts["featuredProducts"]} />
      <div className="mt-4">
        <ProductSlider products={featuredProducts} />
      </div>
    </div>
  );
};

export default FeaturedProduct;
