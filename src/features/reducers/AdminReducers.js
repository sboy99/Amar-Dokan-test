import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/local";

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

export function startLoading(state) {
  state.isLoading = true;
}

export function stopLoading(state) {
  state.isLoading = false;
}

export function openCategoryForm(state) {
  state.category.isOpenCategoryForm = true;
}

export function closeCategoryForm(state) {
  state.category.isOpenCategoryForm = false;
}

//> Async requests ...
export const requestRejected = (state, action) => {
  state.response.isError = true;
  state.response.errorMessage = action.error.message;
  stopLoading(state);
};

export const requestFufilled = (fn) => (state, action) => {
  state.response.isSuccess = true;
  fn(state, action);
  stopLoading(state);
};

const asyncWrapper =
  (fn) =>
  async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      if (error.code === `ERR_CANCELED`) throw error;
      throw error.response.data;
    }
  };

export const fetchAllCategories = createAsyncThunk(
  "admin/category/fetchCategories",
  asyncWrapper(async (signal) => {
    const { data } = await axios.get(
      "/category?select=name,type,subCategories",
      { signal, needNoAuth: true }
    );
    return data;
  })
);

export const fetchAllCategoriesFullfilled = requestFufilled((state, action) => {
  state.category.allCategories = [...action.payload.categories];
  state.category.filteredCategories = state.category.allCategories;
});

export const updateCategory = createAsyncThunk(
  "/admin/category/updateCategory",
  asyncWrapper(async (category) => {
    await axios.patch(`/category/${category.id}`, category.data);
    return category;
  })
);

export const updateCategoryFulfilled = requestFufilled((state, action) => {
  state.category.allCategories = state.category.allCategories.map(
    (category) => {
      if (category._id === action.payload.id) {
        const newCategory = action.payload.data;
        newCategory._id = action.payload.id;
        return newCategory;
      }
      return category;
    }
  );

  state.category.filteredCategories = state.category.filteredCategories.map(
    (category) => {
      if (category._id === action.payload.id) {
        const newCategory = action.payload.data;
        newCategory._id = action.payload.id;
        return newCategory;
      }
      return category;
    }
  );
});
