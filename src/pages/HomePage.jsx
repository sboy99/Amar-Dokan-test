import React from "react";
import { Benefits, Hero } from "../components";
import { blueBG } from "../data";

const HomePage = () => {
  return (
    <section className="Home">
      {/* Hero */}
      <div className="snap-start p-4">
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
    </section>
  );
};

export default HomePage;
