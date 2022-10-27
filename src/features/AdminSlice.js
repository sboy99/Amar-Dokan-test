import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllCategories,
  fetchAllCategoriesFullfilled,
  fetchAllCategoriesPending,
  fetchAllCategoriesRejected,
} from "./reducers/AdminReducers";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: ``,
  isSidebarOpen: false,
  allCategories: [],
};

const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    resetAdminResponse: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = ``;
    },
  },
  extraReducers: {
    [fetchAllCategories.pending]: fetchAllCategoriesPending,
    [fetchAllCategories.fulfilled]: fetchAllCategoriesFullfilled,
    [fetchAllCategories.rejected]: fetchAllCategoriesRejected,
  },
});

export default AdminSlice;
