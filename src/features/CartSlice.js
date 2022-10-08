import { createSlice } from "@reduxjs/toolkit";
import { addProdoductToCart } from "./reducers/CartReducers";

const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  shippinFee: 40,
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addProdoductToCart,
  },
  extraReducers: {},
});

export default CartSlice;
