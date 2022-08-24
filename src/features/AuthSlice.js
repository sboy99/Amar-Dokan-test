import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegister: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default AuthSlice.reducer;
