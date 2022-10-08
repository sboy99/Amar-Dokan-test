import React from "react";
import { useSelector } from "react-redux";
import { cart } from "../../app/store";
import { CompHeaderText } from "../../components";
import { HeaderTexts } from "../../data";

const CartColumn = () => {
  const { cart: items } = useSelector(cart);
  return (
    <div className="">
      {/* Header */}
      <CompHeaderText {...HeaderTexts["cart"]} />
      {/* Products */}
      <div className="my-6 border-t border-t-slate-200">
        {items.length ? (
          <div className="">{/* //todo: product list */}</div>
        ) : (
          <div className=" flex min-h-16 items-center justify-center">
            <h1 className="font-lexend text-lg font-semibold tracking-tight text-slate-500">
              Your cart is empty! Please add some product
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartColumn;
