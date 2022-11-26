import { createSlice } from "@reduxjs/toolkit";
import {
  startLoading,
  requestRejected,
  openCategoryForm,
  closeCategoryForm,
  filterCategory,
  fetchAllCategories,
  fetchAllCategoriesFullfilled,
  updateCategory,
  updateCategoryFulfilled,
  createCategory,
  createCategoryFulfilled,
  openProductForm,
  closeProductForm,
  filterProduct,
  fetchAllProducts,
  fetchAllProductsFullfilled,
  createProduct,
  createProductFulfilled,
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
  product: {
    isOpenProductForm: false,
    allProducts: [],
    filteredProducts: [],
  },
};

const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    openCategoryForm,
    closeCategoryForm,
    filterCategory,

    openProductForm,
    closeProductForm,
    filterProduct,

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

    [createCategory.pending]: startLoading,
    [createCategory.fulfilled]: createCategoryFulfilled,
    [createCategory.rejected]: requestRejected,

    [updateCategory.pending]: startLoading,
    [updateCategory.fulfilled]: updateCategoryFulfilled,
    [updateCategory.rejected]: requestRejected,

    [fetchAllProducts.pending]: startLoading,
    [fetchAllProducts.fulfilled]: fetchAllProductsFullfilled,
    [fetchAllProducts.rejected]: requestRejected,

    [createProduct.pending]: startLoading,
    [createProduct.fulfilled]: createProductFulfilled,
    [createProduct.rejected]: requestRejected,
  },
});

export default AdminSlice;
