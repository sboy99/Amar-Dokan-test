import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  },
});

export const { setSearchOpen, setSearchText, setMenuOpen } =
  LayoutSlice.actions;
export default LayoutSlice.reducer;
