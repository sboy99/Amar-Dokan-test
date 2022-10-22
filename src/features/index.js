import AuthSlice from "./AuthSlice";
import LayoutSlice from "./LayoutSlice";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";
import AdminSlice from "./AdminSlice";
// Async Thunks //
import {
  fetchAllProducts,
  fetchSingleProduct,
} from "./reducers/ProductReducers";

const AuthReducer = AuthSlice.reducer;
const LayoutReducer = LayoutSlice.reducer;
const ProductReducer = ProductSlice.reducer;
const CartReducer = CartSlice.reducer;
const AdminReducer = AdminSlice.reducer;

// -Export Reducers- //
export {
  AuthReducer,
  LayoutReducer,
  ProductReducer,
  CartReducer,
  AdminReducer,
};

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
export const {
  setWidth,
  setSearchOpen,
  setSearchText,
  setMenuOpen,
  setGridView,
  setModalOpen,
  setModalContext,
  resetModalContext,
} = LayoutSlice.actions;
export const { getFeaturedProducts, sortBy } = ProductSlice.actions;
export const { addProdoductToCart } = CartSlice.actions;
export const { setSidebarOpen } = AdminSlice.actions;

// -Export Async Thunks- //
export { fetchAllProducts, fetchSingleProduct };
