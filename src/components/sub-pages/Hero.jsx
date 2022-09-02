import React from "react";
import { CurrencyRupeeIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
// import { Incentives } from "../../data";
import { Link } from "react-router-dom";
import { Incentives } from "../../data";

const Hero = () => {
  function Incentive({ Icon, title, desc }) {
    return (
      <div className="flex w-full max-w-sm shrink-0 items-start gap-6">
        <div className="rounded-lg border-2 border-blue-600/75 p-1">
          <Icon className="h-8 w-8 text-blue-600" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-inter font-semibold capitalize text-slate-900">
            {title}
          </h1>
          <p className="leading-5 text-slate-700 line-clamp-3">{desc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto grid min-h-screen-85 grid-cols-1">
      {/* Text */}
      <div className="relative mt-16 flex flex-col gap-4 sm:items-center lg:mt-0 lg:justify-center ">
        <h1 className="relative flex flex-col gap-2 font-lexend text-4xl font-extrabold tracking-tight text-slate-900 sm:items-center md:text-7xl lg:gap-4">
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
        <p className="max-w-2xl font-inter text-lg text-slate-700 line-clamp-3 sm:text-center lg:mt-2 lg:line-clamp-3">
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
      <div className="col-start-1 row-start-2  w-full">
        <div className="mt-2 flex flex-wrap items-center justify-evenly gap-4 p-4 sm:gap-6">
          {Incentives.map((inc) => (
            <Incentive key={inc.id} {...inc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
