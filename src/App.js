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
} from "./pages";

const App = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
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
  );
};

export default App;
