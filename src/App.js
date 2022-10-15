import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, Protected, ResetPassword, Modal } from "./components";
import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  CheckOut,
  Error,
  SignIn,
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
          </Route>
          <Route path="signin">
            <Route index element={<SignIn />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </main>
  );
};

export default App;
