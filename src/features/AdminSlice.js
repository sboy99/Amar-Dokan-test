import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
};

const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export default AdminSlice;
