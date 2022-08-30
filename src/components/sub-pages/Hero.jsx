import React from "react";
import { CurrencyRupeeIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container mx-auto grid min-h-screen-85 snap-start grid-cols-1 p-5 lg:grid-cols-2">
      {/* Text */}
      <div className="relative flex flex-col justify-center gap-4 ">
        <h1 className="relative flex flex-col gap-2 font-poppins text-4xl font-extrabold text-slate-800 lg:gap-4 lg:text-7xl">
          <p>Get 100%</p>
          <p className="flex flex-wrap items-center gap-3 text-blue-600">
            <span className="relative bg-blue-600 px-2 py-1 !text-white">
              Authentic
              <ShoppingBagIcon className="absolute right-0 -top-1 h-6 w-6 translate-x-1/2 -translate-y-1/2 rotate-12 !text-amber-500 lg:-top-2 lg:h-10 lg:w-10" />
            </span>{" "}
            Product
          </p>
          <p className="flex flex-wrap items-center gap-3 text-3xl !text-slate-600 lg:text-6xl">
            at a Affrodable
            <span className="relative rounded-xl bg-emerald-100 py-1 px-4 text-emerald-700 lg:mx-3">
              Price
              {/* floating icon */}
              <CurrencyRupeeIcon className="absolute top-0 right-0 h-6 w-6 translate-x-1/2 -translate-y-1/2 animate-pulse text-amber-500 lg:h-8 lg:w-8" />
            </span>
          </p>
        </h1>
        <p className="text-lg text-slate-400 line-clamp-2 lg:mt-6 lg:text-center lg:line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae a id
          ad, dolor tempora ipsam harum dolore! dolor sit amet consectetur
          adipisicing elit. Cumque maiores eligendi, expedita nobis maxime esse.
        </p>
        {/* button */}
        <div className="flex items-center justify-start gap-4 ">
          <Link
            to="/products"
            className="max-w-xs rounded-lg bg-slate-900 px-5 py-2 text-center font-semibold text-white outline-none transition duration-200 ease-in-out hover:bg-slate-700 lg:text-lg"
          >
            Explore
          </Link>
          <Link
            to="/signin"
            className="group flex items-center gap-3 text-blue-600 lg:text-xl"
          >
            Sing In{" "}
            <ArrowRightIcon className="h-5 w-5 transition duration-300 ease-in-out group-hover:translate-x-1 lg:scale-125" />
          </Link>
        </div>
      </div>
      {/* Image */}
    </div>
  );
};

export default Hero;
