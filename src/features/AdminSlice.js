import { createSlice } from "@reduxjs/toolkit";
import {
  filterCategory,
  fetchAllCategories,
  fetchAllCategoriesFullfilled,
  requestRejected,
  startLoading,
  updateCategory,
  updateCategoryFulfilled,
  openCategoryForm,
  closeCategoryForm,
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
    isOpenCategoryForm: false,
    filter: ``,
    allCategories: [],
    filteredCategories: [],
  },
};

const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    openCategoryForm,
    closeCategoryForm,
    filterCategory,
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
    [fetchAllCategories.pending]: startLoading,
    [fetchAllCategories.fulfilled]: fetchAllCategoriesFullfilled,
    [fetchAllCategories.rejected]: requestRejected,

    [updateCategory.pending]: startLoading,
    [updateCategory.fulfilled]: updateCategoryFulfilled,
    [updateCategory.rejected]: requestRejected,
  },
});

export default AdminSlice;
