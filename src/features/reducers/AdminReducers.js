import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/local";

export const fetchAllCategories = createAsyncThunk(
  "admin/fetchCategories",
  async (signal) => {
    try {
      const { data } = await axios.get("/category", { signal });
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
  state.isSuccess = true;
  state.allCategories = [...action.payload.categories];
}
export function fetchAllCategoriesRejected(state, action) {
  state.isLoading = false;
  state.isError = true;
  state.errorMessage = action.error.message;
}
