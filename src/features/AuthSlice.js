import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegister: false,
  isForgotPassword: false,
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: ``,
  user: null,
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
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setSuccess: (state) => {
      state.isSuccess = true;
    },
    setError: (state) => {
      state.isError = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetState: (state) => {
      state.message = ``;
      state.isError = false;
      state.isSuccess = false;
    },
  },
});

export const {
  resetState,
  setRegister,
  setForgotPassword,
  setLoading,
  setMessage,
  setSuccess,
  setError,
  setUser,
} = AuthSlice.actions;

export default AuthSlice.reducer;
