import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/local";

export const fetchAllCategories = createAsyncThunk(
  "admin/fetchCategories",
  async (signal) => {
    try {
      const { data } = await axios.get(
        "/category?select=name,type,subCategories",
        { signal }
      );
      return data;
    } catch (error) {
      if (error.code === `ERR_CANCELED`) throw error;
      throw error.response.data;
    }
  }
);

export function fetchAllCategoriesPending(state) {
  state.isLoading = true;
}
export function fetchAllCategoriesFullfilled(state, action) {
  state.isLoading = false;
  state.response.isSuccess = true;
  state.category.allCategories = [...action.payload.categories];
  state.category.filteredCategories = state.category.allCategories;
}
export function fetchAllCategoriesRejected(state, action) {
  state.isLoading = false;
  state.response.isError = true;
  state.response.errorMessage = action.error.message;
}

export function filterCategory(state, action) {
  if (action.payload.category === "") {
    state.category.filteredCategories = state.category.allCategories;
  } else {
    state.category.filteredCategories = state.category.allCategories.filter(
      (category) =>
        category.type.toLowerCase() === action.payload.category.toLowerCase()
    );
  }
}
