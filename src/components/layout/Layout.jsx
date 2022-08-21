import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "..";
import laserBeam from "../../assets/img/laser_beam.png";

const Layout = () => {
  const BgImage = () => (
    <div className="absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden">
      <div className="flex w-[108rem] flex-none justify-end">
        <picture className="">
          <img
            src={laserBeam}
            alt="bgImg"
            className="w-[71rem] max-w-none flex-none md:w-[81rem]"
          />
        </picture>
      </div>
    </div>
  );

  //> JSX

  return (
    <div className=" relative z-0">
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <BgImage />
      <Footer />
    </div>
  );
};

export default Layout;
