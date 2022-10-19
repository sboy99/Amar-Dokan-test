import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Layout,
  Protected,
  ResetPassword,
  Modal,
  ProtectedForAdmin,
  Ecommerce,
} from "./components";
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
              <AdminPage />
              //</ProtectedForAdmin>
              //</Protected>
            }
          >
            <Route index element={<Ecommerce />} />
          </Route>

          {/* 404 not found */}
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </main>
  );
};

export default App;
