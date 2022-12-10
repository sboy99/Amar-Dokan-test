import React from "react";
import { Headline, AvailableProducts } from "../";
import { AddNewProduct } from "..";

const Products = () => {
  return (
    <section className="">
      {/* Headline */}
      <Headline
        mainHeading={`Manage your products`}
        subHeading={`Here you can create,manage,modify products. Which will be benifical for you. Good product management gives you good profit`}
      />
      {/* structure */}
      <main className="flex flex-col justify-start gap-y-2 p-4">
        {/* Add New Product */}
        <AddNewProduct />
        {/* available products */}
        <AvailableProducts />
      </main>
    </section>
  );
};

export default Products;
