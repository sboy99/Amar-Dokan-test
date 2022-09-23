import axios from "../../api/axios";
import { products_url } from "../../data";
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

//> sort by name
const sortByName = (state) => {
  console.log("Name");
};
//> sort by newest
const sortByNewest = () => {
  console.log("New");
};
//> sort by oldest
const sortByOldest = () => {
  console.log("Old");
};
//> sort by lowest price
const sortByLowestPrice = () => {
  console.log("Low");
};
//> sort by highest price
const sortByHighestPrice = () => {
  console.log("High");
};

export {
  fetchAllProducts,
  getFeaturedProducts,
  fetchAllProductsPending,
  fetchAllProductsFullfilled,
  fetchAllProductsRejected,
  sortByName,
  sortByNewest,
  sortByOldest,
  sortByLowestPrice,
  sortByHighestPrice,
};
