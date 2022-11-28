import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAdmin } from "../app/store";
import {
  ProductForm,
  CategoryForm,
  ToastMessage,
} from "../components/adminPage";
import {
  fetchAllCategories,
  filterCategory,
  fetchCurrentProducts,
} from "../features";

const AdminWrapper = ({ children }) => {
  const {
    isLoading,
    category: { filter },
  } = useAdmin();
  const dispatch = useDispatch();

  //> Initially fetch all categories...
  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchAllCategories(controller.signal));

    return () => controller.abort();
    //eslint-disable-next-line
  }, []);

  //> Filter Categories
  useEffect(() => {
    dispatch(filterCategory({ category: filter }));

    //eslint-disable-next-line
  }, [filter]);

  //> Initially fetch all products ...
  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchCurrentProducts(controller.signal, { page: 0, limit: 5 }));

    return () => controller.abort();
    //eslint-disable-next-line
  }, []);

  // if (isLoading)
  //   return (
  //     <div className="fixed inset-0 h-2 bg-gradient-to-r from-amber-500 to-rose-600"></div>
  //   );

  return (
    <>
      {/* Pop up Forms */}
      <ToastMessage />
      <CategoryForm />
      <ProductForm />
      {children}
    </>
  );
};

export default AdminWrapper;
