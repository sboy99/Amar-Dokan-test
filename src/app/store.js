import { configureStore } from "@reduxjs/toolkit";
import { LayoutReducer } from "../features";

export const store = configureStore({
  reducer: {
    Layout: LayoutReducer,
  },
});

export const Layout = (store) => store.Layout;
