import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "..";
import laserBeam from "../../assets/img/laser_beam.png";

const Layout = () => {
  return (
    <div className=" relative z-0">
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <img src={laserBeam} alt="bgImg" className="fixed inset-0 -z-10" />
    </div>
  );
};

export default Layout;
