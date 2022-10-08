import React, { Fragment, useEffect, useState } from "react";
import { formatToINR } from "../../utils";
import { StarIcon } from "@heroicons/react/24/solid";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { RadioGroup } from "@headlessui/react";
import { Button } from "../../components";
import { products } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { addProdoductToCart } from "../../features";

const PriceSection = () => {
  const dispatch = useDispatch();
  const { singleProduct } = useSelector(products);
  const { price, stars, reviews, colors, stock } = singleProduct;
  const [selectedColor, setSelectedColor] = useState(null);
  const [productPayload, setProductPayload] = useState({});
  const [quantity, setQuantity] = useState(1);

  // Add to cart Payload //
  useEffect(
    () => {
      if (singleProduct?.id) {
        if (!selectedColor) setSelectedColor(singleProduct?.colors[0]);
        setProductPayload({
          id: singleProduct.id,
          name: singleProduct?.name,
          price: singleProduct?.price,
          image: singleProduct?.images[0]?.url,
          selectedColor,
          quantity,
        });
      }
    },
    //eslint-disable-next-line
    [singleProduct?.id, selectedColor, quantity]
  );

  function IncQuantity() {
    if (quantity < stock) setQuantity((q) => q + 1);
  }
  function DecQuantity() {
    if (quantity > 1) setQuantity((q) => q - 1);
  }

  return (
    <div className="">
      {/* price */}
      <h1 className="font-inter text-2xl font-light tracking-tight text-slate-800 lg:text-3xl">
        {formatToINR(price)}
      </h1>
      {/* ratings & review */}
      <div className="mt-2 flex items-center ">
        <div className="flex items-center">
          {/* stars */}
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={`${
                stars > rating ? "text-indigo-700" : "text-gray-200"
              } h-5 w-5 flex-shrink-0`}
            />
          ))}
          {/* no of reviews */}
          <div className="ml-4 font-inter tracking-tight text-indigo-700">
            {reviews} reviews
          </div>
        </div>
      </div>
      {/* colors */}
      <div className="mt-4">
        <Colors
          colors={colors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
      {/* Availability */}
      <div className="mt-4 flex items-center justify-between">
        {/* stock */}
        <div className="">
          <h1 className="headTitle">Available</h1>
          <p className="mt-2 w-fit rounded-full bg-slate-100 px-4 py-1 font-inter font-medium tracking-tight text-slate-800">
            {stock}
          </p>
        </div>
        {/* Quantity */}
        <div className="flex flex-col items-center">
          <h1 className="headTitle">Quantity</h1>
          <div className="mt-2 flex w-fit items-center justify-between gap-x-4 rounded-full py-1 font-inter font-medium tracking-tight text-slate-800">
            <button
              onClick={DecQuantity}
              className="rounded-full p-1 hover:bg-slate-100"
            >
              <MinusIcon className="h-6 w-6" />
            </button>
            <p>{quantity}</p>
            <button
              onClick={IncQuantity}
              className="rounded-full p-1 hover:bg-slate-100 "
            >
              <PlusIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className="mt-6 space-y-2">
        {/* add to bags*/}
        <Button
          onClick={() => dispatch(addProdoductToCart(productPayload))}
          className="w-full border border-slate-800 bg-slate-50 text-slate-800 transition duration-200 hover:bg-slate-100 "
        >
          Add to cart
        </Button>
        {/* buy now */}
        <Button className="w-full bg-slate-700 text-white transition duration-200 hover:bg-slate-600">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default PriceSection;

function Colors({ colors = [], selectedColor, setSelectedColor }) {
  return (
    <RadioGroup value={selectedColor} onChange={setSelectedColor}>
      <RadioGroup.Label className="headTitle">Colors</RadioGroup.Label>
      <div className="mt-2 flex items-center gap-x-4">
        {colors.map((color) => (
          <RadioGroup.Option key={color} value={color} as={Fragment}>
            {({ checked, active }) => (
              <div
                className={`${
                  checked || active ? `ring-2 ring-slate-600` : `ring-0`
                }  cursor-pointer rounded-full  p-0.5 outline-none`}
              >
                <span
                  className="block h-8 w-8 rounded-full"
                  style={{ backgroundColor: color }}
                ></span>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
