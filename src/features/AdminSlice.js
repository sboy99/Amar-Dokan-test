import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: true,
};

const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    toogleSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export default AdminSlice;
