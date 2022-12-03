import React from "react";
import { useState } from "react";
import { useAdmin } from "../../../../../app/store";
import ProductData from "./ProductData";
const attributes = [
  "name",
  "price",
  "type",
  "category",
  "free delivery",
  "published",
  "actions",
];

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  const {
    product: { filteredProducts },
    category: { allCategories },
  } = useAdmin();

  React.useEffect(() => {
    const newProducts = filteredProducts.map((product) => {
      const { _id, name, price, type, category, freeShipping, published } =
        product;
      const categoryName = allCategories.find((c) => c._id === category).name;
      return {
        productId: _id,
        name,
        price,
        type,
        categoryName,
        freeShipping,
        published,
      };
    });
    setProducts(newProducts);

    //eslint-disable-next-line
  }, [filteredProducts.length]);

  const TableHead = (
    <>
      <th className="hidden whitespace-nowrap py-3 px-6 md:block">
        Product Id
      </th>
      {attributes.map((attribute) => (
        <th
          key={attribute}
          scope="col"
          className="whitespace-nowrap py-2 px-4 sm:py-3 sm:px-6"
        >
          {attribute}
        </th>
      ))}
    </>
  );

  const TableBody = products.map((prod) => {
    return <ProductData key={prod.productId} data={prod} />;
  });

  return (
    <table className="w-full table-auto overflow-auto p-4 text-left text-sm text-gray-500 dark:text-gray-400">
      <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
        <tr>{TableHead}</tr>
      </thead>
      <tbody>{TableBody}</tbody>
    </table>
  );
};

export default DisplayProducts;
