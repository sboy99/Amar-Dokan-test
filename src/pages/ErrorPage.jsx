import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { notFound } from "../data";

const ErrorPage = () => {
  const image = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const obj = image.current;
    obj.classList.add("shake");
    return () => obj.classList.remove("shake");
  }, []);

  const navigateToHome = () => {
    navigate("/", { state: { from: location }, replace: true });
  };

  return (
    <div className="min-h-screen-1/2 mx-auto flex w-full flex-wrap-reverse items-center justify-center bg-amber-400 p-6 ">
      <div className="flex flex-col">
        <h1 className="-rotate-3 text-center font-poppins text-7xl font-extrabold text-white ">
          Opps!
        </h1>
        <p className=" mt-2 rotate-6 text-center text-3xl font-bold text-yellow-50">
          Page Not Found
        </p>
        <button
          onClick={navigateToHome}
          className="my-2 rotate-3 rounded-full bg-amber-50 py-1 px-3 text-center font-poppins text-lg text-amber-500"
        >
          Back to Home
        </button>
      </div>
      <img
        ref={image}
        src={notFound}
        alt="not found"
        className="max-w-lg object-cover object-center"
      />
    </div>
  );
};

export default ErrorPage;
