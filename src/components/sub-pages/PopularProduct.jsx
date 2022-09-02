import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeProducts } from "../../data";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const PopularProduct = () => {
  const maxCaraosel = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const caraosel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const moveNext = () => {
    if (
      caraosel.current !== null &&
      caraosel.current.offsetWidth * currentIndex <= maxCaraosel.current
    ) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }
    if (direction === "next" && caraosel.current !== null) {
      return caraosel.current.offsetWidth * currentIndex >= maxCaraosel.current;
    }
    return false;
  };

  useEffect(() => {
    if (caraosel && caraosel.current) {
      caraosel.current.scrollLeft = caraosel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxCaraosel.current = caraosel.current
      ? caraosel.current.scrollWidth - caraosel.current.offsetWidth
      : 0;
  }, []);

  const Product = ({ id, title, category, price, image }) => {
    return (
      <Link
        to={`/products/${id}`}
        className="group flex shrink-0 snap-start flex-col gap-2 rounded-md "
      >
        <div className="h-72 w-56 overflow-hidden md:h-80 md:w-64 lg:h-96 lg:w-72 ">
          <img
            src={image}
            alt={title}
            className=" h-full w-full rounded-md object-cover object-center transition group-hover:scale-105 "
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex items-start justify-between ">
          <div className="">
            <p className="text-xl font-medium capitalize text-stone-800">
              {title}
            </p>
            <p className="text-sm capitalize text-stone-500">{category}</p>
          </div>
          <p className="text-xl font-semibold text-stone-800">${price}</p>
        </div>
      </Link>
    );
  };

  return (
    <div className="container mx-auto flex flex-col gap-4 p-4 py-12 md:py-16">
      <h1 className="max-w-2xl">
        <p className="text-lg font-semibold text-indigo-600 md:text-2xl">
          Products
        </p>
        <p className="inline-block font-poppins text-4xl font-extrabold capitalize tracking-tighter text-slate-900 md:text-6xl">
          Our Popular products
        </p>
        {/* desc */}
        <p className="mt-2 font-inter tracking-tight text-stone-600 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ducimus
          cumque voluptate itaque consectetur minima vero autem alias recusandae
          voluptas?
        </p>
        <div className="flex items-center gap-4">
          <button className="mt-4 rounded-md bg-stone-800 py-2  px-4 font-semibold capitalize text-stone-50 outline-none transition-all duration-200 hover:bg-stone-700 md:text-xl">
            Start Shopping
          </button>
          <button className="mt-4 rounded-md border border-stone-800/50 bg-stone-200/50 py-2  px-4 font-semibold capitalize text-stone-600 outline-none transition-all duration-200 hover:bg-stone-100 md:text-xl">
            Explore all
          </button>
        </div>
      </h1>
      {/* Slider... */}
      <div className="relative mt-4 grid grid-cols-1 items-center ">
        <button
          onClick={movePrev}
          disabled={isDisabled("prev")}
          className="group absolute right-8 -top-12 z-10 hidden -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white p-2 shadow-md outline-none disabled:opacity-50 sm:block"
        >
          <ChevronLeftIcon className="h-6 w-6 text-stone-800 group-hover:text-sky-500" />
        </button>

        <div
          ref={caraosel}
          className="relative flex w-full touch-pan-x snap-proximity items-center gap-x-4 overflow-x-auto scroll-smooth  scrollbar-hide sm:snap-x sm:overflow-x-hidden md:gap-x-6 "
        >
          {
            // element
            HomeProducts.map((product) => (
              <Product key={product.id} {...product} />
            ))
          }
        </div>
        <button
          onClick={moveNext}
          disabled={isDisabled("next")}
          className="group absolute right-0 -top-12 z-10 hidden -translate-y-1/2 overflow-hidden rounded-full bg-white p-2 shadow-md outline-none disabled:opacity-50 sm:block"
        >
          <ChevronRightIcon className="h-6 w-6 text-stone-800 group-hover:text-sky-500" />
        </button>
      </div>
    </div>
  );
};

export default PopularProduct;
