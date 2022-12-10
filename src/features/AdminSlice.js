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
  openProductEditMode,
  closeProductEditMode,
  filterProduct,
  getSingleProduct,
  getSingleProductFulfilled,
  fetchAllProducts,
  fetchAllProductsFullfilled,
  createProduct,
  createProductFulfilled,
  updateProduct,
  updateProductFullfilled,
  setRequestId,
  insertToDeleteImages,
  clearDeleteImages,
  deleteProductImage,
  deleteProductImageFullfilled,
} from "./reducers/AdminReducers";

const initialState = {
  isLoading: false,
  request: {
    id: null,
  },
  response: {
    isSuccess: false,
    isError: false,
    message: ``,
  },
  isSidebarOpen: false,
  category: {
    isOpenCategoryForm: false,
    filter: ``,
    allCategories: [],
    filteredCategories: [],
  },
  product: {
    productEditMode: false,
    editProductId: ``,
    isOpenProductForm: false,
    allProducts: [],
    filteredProducts: [],
    singleProduct: null,
    deleteImages: [],
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
    openProductEditMode,
    closeProductEditMode,
    filterProduct,
    insertToDeleteImages,
    clearDeleteImages,

    setRequestId,

    setSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    resetAdminResponse: (state) => {
      state.response.isSuccess = false;
      state.response.isError = false;
      state.response.message = ``;
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

    [getSingleProduct.pending]: startLoading,
    [getSingleProduct.fulfilled]: getSingleProductFulfilled,
    [getSingleProduct.rejected]: requestRejected,

    [createProduct.pending]: startLoading,
    [createProduct.fulfilled]: createProductFulfilled,
    [createProduct.rejected]: requestRejected,

    [deleteProductImage.pending]: (state, action) => {},
    [deleteProductImage.fulfilled]: deleteProductImageFullfilled,
    [deleteProductImage.rejected]: requestRejected,

    [updateProduct.pending]: startLoading,
    [updateProduct.fulfilled]: updateProductFullfilled,
    [updateProduct.rejected]: requestRejected,
  },
});

export default AdminSlice;
