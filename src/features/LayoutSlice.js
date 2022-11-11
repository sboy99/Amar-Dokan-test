import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  width: window.innerWidth,
  gridView: true,
  searchOpen: false,
  menuOpen: false,
  searchText: ``,
  isModalOpen: false,
  modalContext: {},
};

const LayoutSlice = createSlice({
  name: `Layout`,
  initialState,
  reducers: {
    setWidth: (state, action) => {
      state.width = action.payload;
    },
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
    setModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setModalContext: (state, action) => {
      state.modalContext = action.payload;
    },
    resetModalContext: (state) => {
      state.modalContext = null;
    },
  },
});

export default LayoutSlice;
