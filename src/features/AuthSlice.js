import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegister: false,
  isForgotPassword: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRegister: (state, action) => {
      state.isRegister = action.payload;
    },
    setForgotPassword: (state, action) => {
      state.isForgotPassword = action.payload;
    },
  },
});

export const { setRegister, setForgotPassword } = AuthSlice.actions;

export default AuthSlice.reducer;
