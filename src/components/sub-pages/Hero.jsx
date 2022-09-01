import React from "react";
import { CurrencyRupeeIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
// import { Incentives } from "../../data";
import { Link } from "react-router-dom";

const Hero = () => {
  function Incentive({ Icon, title }) {
    return (
      <div className="shrink-0 px-2">
        <div className="flex items-center gap-2">
          <div className="">
            {<Icon className="h-10 w-10 text-slate-600" />}
          </div>
          <p className="inline-block text-2xl font-bold capitalize tracking-tighter text-slate-800">
            {title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto grid min-h-screen-85 grid-cols-1">
      {/* Text */}
      <div className="relative mt-16 flex flex-col items-center gap-4 lg:mt-0 lg:justify-center ">
        <h1 className="relative flex flex-col items-center gap-2 font-lexend text-4xl font-extrabold tracking-tight text-slate-800 lg:gap-4 lg:text-7xl">
          <p className="font-poppins">Get 100%</p>
          <p className="flex flex-wrap items-center gap-3 text-blue-600">
            <span className="relative bg-blue-600 py-1 px-4 !text-white">
              Authentic
              <ShoppingBagIcon className="absolute right-0 -top-1 h-6 w-6 translate-x-1/2 -translate-y-1/2 rotate-12 !text-amber-500 lg:-top-2 lg:h-10 lg:w-10" />
            </span>{" "}
            Product
          </p>
          <p className="flex flex-wrap items-center gap-3 text-3xl lg:text-6xl">
            at a Affrodable
            <span className="relative rounded-lg  bg-emerald-400/10 py-1 px-4 text-emerald-500 backdrop-blur-md lg:mx-3">
              Price
              {/* floating icon */}
              <CurrencyRupeeIcon className="absolute top-0 right-0 h-6 w-6 translate-x-1/2 -translate-y-1/2 animate-pulse text-amber-500 lg:h-8 lg:w-8" />
            </span>
          </p>
        </h1>
        <p className="max-w-3xl text-center text-lg tracking-tighter text-stone-700 line-clamp-3 lg:mt-2 lg:line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae a id
          ad, dolor tempora ipsam harum dolore! dolor sit amet consectetur
          adipisicing elit. Cumque maiores eligendi, expedita nobis maxime esse.
        </p>
        {/* button */}
        <div className="mt-2 flex items-center justify-start gap-4 font-lexend md:gap-10">
          <Link
            to="/products"
            className="max-w-xs rounded-full bg-slate-800 px-5 py-2 text-center text-lg font-semibold text-white outline-none transition duration-200 ease-in-out hover:bg-slate-700 "
          >
            Explore Now
          </Link>
          <Link
            to="/signin"
            className="group flex items-center gap-3 text-lg text-blue-600 "
          >
            Sing In{" "}
            <ArrowRightIcon className="h-5 w-5 transition duration-300 ease-in-out group-hover:translate-x-1 lg:scale-125" />
          </Link>
        </div>
      </div>
      {/* //TODO:Image */}
      <div className="h-full w-full"></div>
    </div>
  );
};

export default Hero;
