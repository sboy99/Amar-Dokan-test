import React from "react";
import { CartColumn } from "../components";

const CartPage = () => {
  return (
    <section className="min-h-screen-50 bg-slate-800 py-8">
      <div className="container mx-auto min-h-64 max-w-7xl rounded-lg bg-white p-4">
        <CartColumn />
      </div>
    </section>
  );
};

export default CartPage;
