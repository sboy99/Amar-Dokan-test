import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, Protected } from "./components";
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
      <section className="min-h-screen w-full bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-100">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="signin" element={<SignIn />} />
            <Route
              path="checkout"
              element={
                <Protected>
                  <CheckOut />
                </Protected>
              }
            />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </section>
    </main>
  );
};

export default App;
