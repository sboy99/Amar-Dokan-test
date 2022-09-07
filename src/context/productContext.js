import React, { createContext, useContext } from "react";
import { useFetchProductsQuery } from "../api/apiSlice";

const ProductContext = createContext({
  product: [],
  getFeaturedProducts: () => {},
  isLoading: true,
  isSuccess: null,
  isError: null,
  error: null,
});
export const ProductProvider = ({ children }) => {
  const {
    data: product,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useFetchProductsQuery();

  function getFeaturedProducts() {
    if (isSuccess) {
      return product.filter((product) => product?.featured === true);
    }
    return [];
  }

  const value = {
    getFeaturedProducts,
    product,
    isLoading,
    isError,
    isSuccess,
    error,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
