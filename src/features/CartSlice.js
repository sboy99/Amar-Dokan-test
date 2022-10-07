import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  shippinFee: 40,
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default CartSlice;
