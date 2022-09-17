import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchAllProductsFullfilled,
  fetchAllProductsPending,
  fetchAllProductsRejected,
  getFeaturedProducts,
} from "./reducers/ProductReducers";

const initialState = {
  allProducts: [],
  featuredProducts: [],
  filteredProducts: [],
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
  },
  extraReducers: {
    [fetchAllProducts.pending]: fetchAllProductsPending,
    [fetchAllProducts.fulfilled]: fetchAllProductsFullfilled,
    [fetchAllProducts.rejected]: fetchAllProductsRejected,
  },
});

export default productSlice;
