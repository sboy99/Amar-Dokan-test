import { configureStore } from "@reduxjs/toolkit";
import { LayoutReducer, AuthReducer } from "../features";

export const store = configureStore({
  reducer: {
    layout: LayoutReducer,
    auth: AuthReducer,
  },
});

export const layout = (store) => store.layout;
export const auth = (store) => store.auth;
