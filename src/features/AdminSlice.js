import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllCategories,
  fetchAllCategoriesFullfilled,
  fetchAllCategoriesPending,
  fetchAllCategoriesRejected,
  filterCategory,
} from "./reducers/AdminReducers";

const initialState = {
  isLoading: false,
  response: {
    isSuccess: false,
    isError: false,
    errorMessage: ``,
  },
  isSidebarOpen: false,
  category: {
    filter: ``,
    allCategories: [],
    filteredCategories: [],
  },
};

const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    filterCategory: filterCategory,
    setSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    resetAdminResponse: (state) => {
      state.response.isSuccess = false;
      state.response.isError = false;
      state.response.errorMessage = ``;
    },
    setCategoryFilter: (state, action) => {
      state.category.filter = action.payload.filter;
    },
  },
  extraReducers: {
    [fetchAllCategories.pending]: fetchAllCategoriesPending,
    [fetchAllCategories.fulfilled]: fetchAllCategoriesFullfilled,
    [fetchAllCategories.rejected]: fetchAllCategoriesRejected,
  },
});

export default AdminSlice;
