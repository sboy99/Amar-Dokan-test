import React from "react";
import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";
import { HomeTestimonials } from "../../data";

const Testimonials = () => {
  return (
    <div className="container z-0 mx-auto grid grid-cols-1 gap-x-4 p-4 py-8 sm:py-10 lg:grid-cols-2">
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
      <div className="overflow-hidden ">
        <div className="relative mt-4 flex h-full w-full items-center justify-center sm:mt-0">
          {HomeTestimonials.map((tetimonial, index) => (
            <Testimonial key={index} {...tetimonial} />
          ))}
        </div>
      </div>
    </div>
  );

  function Testimonial({ userName, domain, rating, profile, title, desc }) {
    return (
      <div className="max-w-sm divide-y divide-slate-200/50">
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
              <p className="font-inter font-semibold text-white">{userName}</p>
              <p className="text-sm tracking-tight text-slate-200">{domain}</p>
            </h1>
            <div className="rounded-full bg-lime-500 p-1">
              <img
                src={profile}
                alt={userName}
                className="h-7 w-7 rounded-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Testimonials;
