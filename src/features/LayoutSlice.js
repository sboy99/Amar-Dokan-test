import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gridView: true,
  searchOpen: false,
  menuOpen: false,
  searchText: ``,
};

const LayoutSlice = createSlice({
  name: `Layout`,
  initialState,
  reducers: {
    setSearchOpen: (state, action) => {
      state.searchOpen = action.payload;
    },
    setMenuOpen: (state, action) => {
      state.menuOpen = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setGridView: (state, action) => {
      state.gridView = action.payload;
    },
  },
});

export default LayoutSlice;
