import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAdmin } from "../app/store";
import { ProductForm, CategoryForm } from "../components/adminPage";
import {
  fetchAllCategories,
  resetAdminResponse,
  filterCategory,
} from "../features";

const AdminWrapper = ({ children }) => {
  const {
    isLoading,
    response: { isError, isSuccess },
    category: { filter },
  } = useAdmin();
  const dispatch = useDispatch();

  useEffect(() => {
    let timeOut;

    if (isError || isSuccess)
      timeOut = setTimeout(() => {
        dispatch(resetAdminResponse());
      }, 5000);

    return () => clearTimeout(timeOut);
    //eslint-disable-next-line
  }, [isError, isSuccess]);

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

  if (isLoading)
    return (
      <div className="fixed inset-0 h-2 bg-gradient-to-r from-amber-500 to-rose-600"></div>
    );

  return (
    <>
      {/* Pop up Forms */}
      <CategoryForm />
      <ProductForm />
      {children}
    </>
  );
};

export default AdminWrapper;
