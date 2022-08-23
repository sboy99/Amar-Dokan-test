import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  searchText: ``,
};

const LayoutSlice = createSlice({
  name: `Layout`,
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { setIsOpen, setSearchText } = LayoutSlice.actions;
export default LayoutSlice.reducer;
