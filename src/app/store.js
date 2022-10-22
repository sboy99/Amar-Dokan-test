import { configureStore } from "@reduxjs/toolkit";
import {
  LayoutReducer,
  AuthReducer,
  ProductReducer,
  CartReducer,
  AdminReducer,
} from "../features";
// import { apiSlice } from "../api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    layout: LayoutReducer,
    auth: AuthReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer,
    products: ProductReducer,
    cart: CartReducer,
    admin: AdminReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  // return getDefaultMiddleware().concat(apiSlice.middleware);
  // },
});

export const layout = (store) => store.layout;
export const auth = (store) => store.auth;
export const products = (store) => store.products;
export const cart = (store) => store.cart;
const admin = (store) => store.admin;

export const useLayout = () => useSelector(layout);
export const useAdmin = () => useSelector(admin);

setupListeners(store.dispatch);
