import AuthSlice from "./AuthSlice";
import LayoutSlice from "./LayoutSlice";
import ProductSlice from "./ProductSlice";
// Async Thunks //
import { fetchAllProducts } from "./reducers/ProductReducers";

const AuthReducer = AuthSlice.reducer;
const LayoutReducer = LayoutSlice.reducer;
const ProductReducer = ProductSlice.reducer;

// -Export Reducers- //
export { AuthReducer, LayoutReducer, ProductReducer };
// -Export Actions- //
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
export const { setSearchOpen, setSearchText, setMenuOpen, setGridView } =
  LayoutSlice.actions;
export const {
  getFeaturedProducts,
  sortByName,
  sortByNewest,
  sortByOldest,
  sortByLowestPrice,
  sortByHighestPrice,
} = ProductSlice.actions;

// -Export Async Thunks- //
export { fetchAllProducts };
