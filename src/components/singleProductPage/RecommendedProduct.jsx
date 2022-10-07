import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductSlider, CompHeaderText } from "..";
import { products } from "../../app/store";
import { HeaderTexts } from "../../data";

const RecommendedProduct = () => {
  const { id } = useParams();
  const { allProducts } = useSelector(products);
  const [category] = useState(
    allProducts.find((prod) => prod.id === id)?.category
  );
  const [recommendedProducts] = useState(
    allProducts.filter((prod) => prod?.category === category && prod?.id !== id)
  );

  return (
    recommendedProducts.length > 0 && (
      <section className="min-h-64 ">
        {/* Text Section */}
        <CompHeaderText {...HeaderTexts["recommandedProducts"]} />
        {/* Slider */}
        <div className="my-4">
          <ProductSlider products={recommendedProducts} />
        </div>
      </section>
    )
  );
};

export default RecommendedProduct;
