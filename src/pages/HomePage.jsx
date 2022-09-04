import React from "react";
import {
  Benefits,
  Hero,
  PopularProduct,
  Testimonials,
  GetInTouch,
} from "../components";
import { blueBG, homeBg, beams, rails, laserBeam } from "../data";

const HomePage = () => {
  function HomeBg() {
    return (
      <div className="absolute -top-[3rem] left-1/2 -z-20 -ml-[40rem] w-[163.125rem] max-w-none hue-rotate-30 sm:-ml-[67.5rem] lg:rotate-180">
        <picture>
          <img
            src={homeBg}
            decoding="async"
            loading="lazy"
            className="h-full w-full object-cover object-center"
            alt=""
          />
        </picture>
      </div>
    );
  }

  function GridOverlay() {
    return (
      <div className="absolute  inset-x-0 top-0 -z-10 h-full">
        <img
          src={beams}
          alt="beams"
          className="-z-10 h-full w-full object-cover object-center"
          decoding="async"
          loading="lazy"
        />
        <div
          className="absolute inset-x-0 top-0 z-10 h-full [mask:linear-gradient(to_top,transparent,white)]"
          style={{
            backgroundImage: `url("https://play.tailwindcss.com/img/grid.svg")`,
          }}
        ></div>
      </div>
    );
  }

  function GetInTouchDecor() {
    return (
      <>
        <picture className="pointer-events-none absolute top-0 left-0 -z-20 flex w-[108rem] items-center">
          <img
            src={laserBeam}
            alt=""
            className="w-[72rem] flex-none scale-125 object-cover object-center"
          />
        </picture>
        <div
          className="absolute inset-x-0 -top-1 -z-10 h-full scale-150 opacity-5 [mask:linear-gradient(to_top,transparent,white)]"
          style={{ backgroundImage: `url(${rails})` }}
        ></div>
      </>
    );
  }

  return (
    <section className="Home pt-16">
      {/* Hero */}
      <div className="relative snap-start overflow-hidden p-4 backdrop-blur-md">
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-[75%] opacity-[0.03] [mask:linear-gradient(to_bottom,transparent,white)]"
          style={{ backgroundImage: `url(${rails})` }}
        ></div>
        <HomeBg />
        <Hero />
      </div>
      {/* benefits */}
      <div className="relative grid min-h-screen-90 snap-start items-center overflow-hidden border-t-2 border-lime-400 ">
        <img
          src={blueBG}
          alt=""
          className="absolute inset-0 -z-50 h-full w-full scale-150 object-cover object-center "
          loading="lazy"
          decoding="async"
        />
        <Benefits />
      </div>
      {/* products */}
      <section
        key="homeProducts"
        className="relative min-h-screen-85 snap-start overflow-hidden border-t border-slate-900/10 bg-white/25"
      >
        <GridOverlay />
        <PopularProduct />
      </section>
      {/* Testimonial */}
      <div className="relative min-h-64 snap-start overflow-x-hidden bg-slate-800">
        <div className="absolute top-0 right-0 h-12 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-sky-400"></div>
        <Testimonials />
      </div>
      {/* Stay Updated */}
      <div className="relative snap-start overflow-hidden border-y-2 border-indigo-600/10 bg-rose-100/10">
        <GetInTouchDecor />
        <GetInTouch />
      </div>
    </section>
  );
};

export default HomePage;
