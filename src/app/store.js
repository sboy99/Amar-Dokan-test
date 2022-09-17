import { configureStore } from "@reduxjs/toolkit";
import { LayoutReducer, AuthReducer, ProductReducer } from "../features";
import { apiSlice } from "../api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    layout: LayoutReducer,
    auth: AuthReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    products: ProductReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export const layout = (store) => store.layout;
export const auth = (store) => store.auth;
export const products = (store) => store.products;

setupListeners(store.dispatch);
