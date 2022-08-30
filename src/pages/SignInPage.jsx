import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../app/store";
import { Register, Login, ForgotPassword } from "../components";
import beams from "../assets/img/beams-templates.png";
import { setRegister, setForgotPassword } from "../features/AuthSlice";

const SignInPage = () => {
  const { isRegister, isForgotPassword } = useSelector(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setRegister(false));
      dispatch(setForgotPassword(false));
    };
    //eslint-disable-next-line
  }, []);

  return (
    <section className="relative snap-start px-4 py-6">
      <div className="mx-auto min-h-64 max-w-lg overflow-hidden rounded-lg bg-white/50 ring-2 ring-white backdrop-blur ">
        {/* decor */}
        <div className="decor hidden bg-indigo-600 lg:block"></div>
        {/* form */}

        {isRegister ? (
          <Register />
        ) : isForgotPassword ? (
          <ForgotPassword />
        ) : (
          <Login />
        )}
      </div>
      <div className="absolute  inset-x-0 top-0 -z-10 h-full ">
        <img
          src={beams}
          alt="beams"
          className="-z-10 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url("https://play.tailwindcss.com/img/grid.svg")`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default SignInPage;
