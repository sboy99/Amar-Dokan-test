import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer, SearchPallete, MobileNavbar } from "..";
import laserBeam from "../../assets/img/laser_beam.png";

const Layout = () => {
  const BgImage = () => (
    <div className="absolute inset-0 -z-10 flex justify-center overflow-hidden pt-16">
      <div className="flex w-[108rem] flex-none justify-end">
        <picture className="">
          <img
            src={laserBeam}
            alt="bgImg"
            className="w-[71rem] max-w-none flex-none md:w-[81rem]"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  );

  //> JSX

  return (
    <div className=" relative z-0 snap-start scroll-smooth">
      <Navbar />
      <MobileNavbar />
      <SearchPallete />
      <div className="mx-auto pt-16">
        <Outlet />
      </div>
      <BgImage />
      <Footer />
    </div>
  );
};

export default Layout;
