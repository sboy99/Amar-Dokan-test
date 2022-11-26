import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/local";

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

export function openProductForm(state) {
  state.product.isOpenProductForm = true;
}

export function closeProductForm(state) {
  state.product.isOpenProductForm = false;
}

export function filterProduct(state, action) {}

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

//- Categoyy -//
export const fetchAllCategories = createAsyncThunk(
  "admin/category/fetchCategories",
  asyncWrapper(async (signal) => {
    const { data } = await axios.get(
      "/category?select=name,type,subCategories,published",
      { signal, needNoAuth: true }
    );
    return data;
  })
);

export const fetchAllCategoriesFullfilled = requestFufilled((state, action) => {
  state.category.allCategories = [...action.payload.categories];
  state.category.filteredCategories = state.category.allCategories;
});

//> Create Category
export const createCategory = createAsyncThunk(
  "/admin/category/createCategory",
  asyncWrapper(async (payload) => {
    const { data } = await axios.post(`/category`, payload);
    return data;
  })
);

export const createCategoryFulfilled = requestFufilled((state, action) => {
  state.category.allCategories.push(action.payload);
  state.category.filteredCategories = state.category.allCategories;
});

//> Update Category by id
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

//- Product -//
export const fetchAllProducts = createAsyncThunk(
  "admin/product/fetchProducts",
  asyncWrapper(async (signal, pageOfset) => {
    const pageNumber = pageOfset?.page || 0;
    const limit = pageOfset?.limit || 10;

    const { data } = await axios.get(
      `/product?select=-description,-createdAt,-updatedAt,-images&page=${pageNumber}&limit=${limit}`,
      { signal, needNoAuth: true }
    );
    return data;
  })
);

export const fetchAllProductsFullfilled = requestFufilled((state, action) => {
  state.product.allProducts = [...action.payload.data];
  state.product.filteredProducts = state.product.allProducts;
});

export const createProduct = createAsyncThunk(
  "admin/product/createProduct",
  asyncWrapper(async (payload) => {
    const { data } = await axios.post("/product", payload);
    return data;
  })
);

export const createProductFulfilled = requestFufilled((state, action) => {
  const { creatorId, images, description, __v, createdAt, updatedAt, ...rest } =
    action.payload;
  state.product.allProducts.push(rest);
  state.product.filteredProducts = state.product.allProducts;
});
