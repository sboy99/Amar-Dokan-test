import React from "react";
import { Benefits, Hero, PopularProduct, Testimonials } from "../components";
import { blueBG, homeBg, beams, rails } from "../data";

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
      <div className="absolute  inset-x-0 top-0 -z-10 h-full ">
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

  return (
    <section className="Home ">
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
        className="relative min-h-screen-85 snap-start border-t border-slate-900/10 bg-white/25"
      >
        <GridOverlay />
        <PopularProduct />
      </section>
      {/* start shoping */}
      <div className="relative min-h-64 snap-start bg-slate-800">
        <Testimonials />
      </div>
    </section>
  );
};

export default HomePage;
