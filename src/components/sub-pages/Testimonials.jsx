import React, { useState } from "react";
import {
  HeartIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { HomeTestimonials } from "../../data";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [left, setLeft] = useState(false);
  const lastIndex = HomeTestimonials.length - 1;
  const prev = () => {
    setLeft(true);
    if (activeIndex === 0) setActiveIndex(lastIndex);
    else setActiveIndex((i) => i - 1);
  };
  const next = () => {
    setLeft(false);
    if (activeIndex === lastIndex) setActiveIndex(0);
    else setActiveIndex((i) => i + 1);
  };

  return (
    <div className="container z-0 mx-auto grid grid-cols-1 gap-x-4 gap-y-6 p-4 py-8 sm:py-10 lg:grid-cols-2">
      <h1 className="font relative z-0 font-poppins">
        <HeartIcon className="absolute left-0 top-1/2 -z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 -rotate-12 text-sky-400 sm:h-12 sm:w-12" />
        <p className="font-semibold capitalize text-sky-400 sm:text-xl">
          Testimonials
        </p>
        <p className="mt-2 inline-block text-3xl font-extrabold capitalize tracking-tighter text-white sm:text-5xl">
          Proud for <br /> customer satisfaction
        </p>
        <p className="mt-2 max-w-lg font-inter leading-5 text-slate-300 sm:leading-7">
          Laudantium, animi consequatur deleniti inventore, ipsum placeat
          explicabo vel quibusdam doloremque eum maiores nesciunt voluptas nisi
          dolorem?
        </p>
      </h1>
      {/* testimonials.. */}
      <div className="w-full">
        <div className="relative mt-4 flex h-full w-full items-center sm:mt-0 lg:justify-center">
          <Button
            onClick={prev}
            className="-top-4 left-0 lg:top-0 lg:left-auto lg:right-12 "
          >
            <ChevronLeftIcon className="h-5 w-5 text-slate-900 group-hover:text-lime-500" />
          </Button>
          {HomeTestimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              {...testimonial}
              show={index === activeIndex}
              left={left}
            />
          ))}
          <Button
            onClick={next}
            className="-top-4 left-8 lg:top-0 lg:left-auto lg:right-0 "
          >
            <ChevronRightIcon className="h-5 w-5 text-slate-900 group-hover:text-lime-500" />
          </Button>
        </div>
      </div>
    </div>
  );

  function Testimonial({
    userName,
    domain,
    rating,
    profile,
    title,
    desc,
    show = false,
    left,
  }) {
    const varient = {
      left: {
        opacity: 0,
        x: -50,
      },
      right: {
        opacity: 0,
        x: 50,
      },
    };

    return (
      <AnimatePresence>
        {show && (
          <motion.div
            variants={varient}
            initial={left ? `left` : `right`}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-sm divide-y divide-slate-200/50"
          >
            <h1 className="py-3 font-inter">
              <p className="text-lg font-semibold text-lime-400">{title}</p>
              <p className=" leading-6 text-slate-300 line-clamp-4">{desc} </p>
            </h1>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-2 text-lg text-lime-400">
                <StarIcon className="h-6 w-6 " /> {rating}
              </div>
              {/* profile */}
              <div className="flex items-center gap-2">
                <h1 className="-space-y-2 text-right">
                  <p className="font-inter font-semibold text-white">
                    {userName}
                  </p>
                  <p className="text-sm tracking-tight text-slate-200">
                    {domain}
                  </p>
                </h1>
                <div className="rounded-full bg-lime-500 p-1">
                  <img
                    src={profile}
                    alt={userName}
                    className="h-8 w-8 rounded-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  function Button({ children, onClick, className }) {
    return (
      <button
        onClick={onClick}
        className={`group absolute rounded-full bg-white p-1 shadow-md outline-none lg:p-2 ${className}`}
      >
        {children}
      </button>
    );
  }
};

export default Testimonials;
