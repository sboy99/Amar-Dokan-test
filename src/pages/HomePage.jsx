import React from "react";
import { Benefits, Hero, PopularProduct } from "../components";
import { blueBG, homeBg, beams } from "../data";

const HomePage = () => {
  function HomeBg() {
    return (
      <div className="absolute -top-[3rem] left-1/2 -z-10 -ml-[40rem] w-[163.125rem] max-w-none hue-rotate-30 sm:-ml-[67.5rem] lg:rotate-180">
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
          className="absolute inset-x-0 top-0 z-10 h-80 [mask-image:linear-gradient(to_top,transparen,white)]"
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
      <div className="relative snap-start overflow-hidden p-4">
        <HomeBg />
        <Hero />
      </div>
      {/* benefits */}
      <div className="relative snap-start overflow-hidden border-t-2 border-lime-400 ">
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
      <div className="relative min-h-screen-85 snap-start border-t border-slate-900/10 bg-white/25">
        <GridOverlay />
        <PopularProduct />
      </div>
      {/* start shoping */}
      <div className="relative min-h-64 snap-start bg-pink-600"></div>
    </section>
  );
};

export default HomePage;
