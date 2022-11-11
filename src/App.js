import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminWrapper from "./wrappers/AdminWrapper";

import {
  Layout,
  Protected,
  ResetPassword,
  Modal,
  ProtectedForAdmin,
} from "./components";

import {
  Category,
  Customers,
  Dashboard,
  Employee,
  Orders,
  Products as Product,
} from "./components/adminPage";

import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  CheckOut,
  Error,
  SignIn,
  UserPage,
  AdminPage,
} from "./pages";

const App = () => {
  return (
    <main className="">
      <section className="z-0 h-screen w-full scroll-p-16 overflow-auto scroll-smooth bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-100">
        <Modal />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route
              path="checkout"
              element={
                <Protected>
                  <CheckOut />
                </Protected>
              }
            />
            {/* user profile */}
            <Route
              path="profile"
              element={
                <Protected>
                  <UserPage />
                </Protected>
              }
            />
          </Route>
          {/* sign in */}
          <Route path="signin">
            <Route index element={<SignIn />} />
          </Route>
          {/* Admin Panel */}
          <Route
            path="admin"
            element={
              //Todo: Get back auth when adminstration is complete
              //<Protected>
              //<ProtectedForAdmin>
              <AdminWrapper>
                <AdminPage />
              </AdminWrapper>
              //</ProtectedForAdmin>
              //</Protected>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="product-categories" element={<Category />} />
            <Route path="products" element={<Product />} />
            <Route path="customers" element={<Customers />} />
            <Route path="orders" element={<Orders />} />
            <Route path="employees" element={<Employee />} />
          </Route>

          {/* 404 not found */}
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </main>
  );
};

export default App;
