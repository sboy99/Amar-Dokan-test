import axios from "../../api/axios";
import { products_url, single_product_url } from "../../data";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (signal) => {
    try {
      const { data } = await axios.get(products_url, { signal });
      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const fetchAllProductsFullfilled = (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.allProducts = [...action.payload];
  state.filteredProducts = [...action.payload];
};

const fetchAllProductsPending = (state, action) => {
  state.isLoading = true;
  state.isSuccess = false;
  state.isError = false;
  state.errorMessage = ``;
};

const fetchAllProductsRejected = (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.errorMessage = action.error.message;
};

const getFeaturedProducts = (state) => {
  if (state.isSuccess) {
    state.featuredProducts = state.allProducts.filter(
      (product) => product?.featured === true
    );
  }
};

const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async ({ id, signal }) => {
    try {
      const { data } = await axios.get(single_product_url + id, { signal });
      return data;
    } catch (error) {
      throw error?.response?.data;
    }
  }
);

const fetchSingleProductPending = (state, action) => {
  state.isLoading = true;
  state.isSuccess = false;
  state.isError = false;
  state.errorMessage = ``;
};
const fetchSingleProductFullfilled = (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.singleProduct = action.payload;
};
const fetchSingleProductRejected = (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.singleProduct = {};
  state.errorMessage = action.error?.message;
};

const sortBy = (state, action) => {
  switch (action?.payload) {
    case "SORT_BY_NAME":
      state.filteredProducts = state.filteredProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;
    case "SORT_BY_NAME_REVERSE":
      state.filteredProducts = state.filteredProducts.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      break;
    case "SORT_BY_NEWEST":
      // Todo : sort by createdAt
      break;
    case "SORT_BY_OLDEST":
      // Todo:
      break;
    case "SORT_BY_LOWEST_PRICE":
      state.filteredProducts = state.filteredProducts.sort(
        (a, b) => a.price - b.price
      );
      break;
    case "SORT_BY_HIGHEST_PRICE":
      state.filteredProducts = state.filteredProducts.sort(
        (a, b) => b.price - a.price
      );
      break;
    default:
      state.filteredProducts = state.allProducts;
      break;
  }
};

export {
  getFeaturedProducts,
  fetchAllProducts,
  fetchAllProductsPending,
  fetchAllProductsFullfilled,
  fetchAllProductsRejected,
  fetchSingleProduct,
  fetchSingleProductPending,
  fetchSingleProductFullfilled,
  fetchSingleProductRejected,
  sortBy,
};