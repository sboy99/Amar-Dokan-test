import { createSlice } from "@reduxjs/toolkit";
import {
  getFeaturedProducts,
  fetchAllProducts,
  fetchAllProductsFullfilled,
  fetchAllProductsPending,
  fetchAllProductsRejected,
  fetchSingleProduct,
  fetchSingleProductPending,
  fetchSingleProductFullfilled,
  fetchSingleProductRejected,
  sortBy,
} from "./reducers/ProductReducers";

const initialState = {
  allProducts: [],
  featuredProducts: [],
  filteredProducts: [],
  singleProduct: {},
  isLoading: true,
  isSuccess: false,
  isError: false,
  errorMessage: ``,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getFeaturedProducts,
    sortBy,
  },
  extraReducers: {
    [fetchAllProducts.pending]: fetchAllProductsPending,
    [fetchAllProducts.fulfilled]: fetchAllProductsFullfilled,
    [fetchAllProducts.rejected]: fetchAllProductsRejected,
    [fetchSingleProduct.pending]: fetchSingleProductPending,
    [fetchSingleProduct.fulfilled]: fetchSingleProductFullfilled,
    [fetchSingleProduct.rejected]: fetchSingleProductRejected,
  },
});

export default productSlice;
