import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../app/store";
import { Register, Login } from "../components";

const SignInPage = () => {
  const { isRegister } = useSelector(auth);
  const dispatch = useDispatch();

  return (
    <section className="px-4 py-6 ">
      <div className="mx-auto min-h-64 max-w-6xl overflow-hidden rounded-lg bg-white/25 shadow-lg ring-2 ring-white backdrop-blur lg:grid lg:grid-cols-2 lg:shadow-none">
        {/* decor */}
        <div className="decor hidden bg-indigo-600 lg:block"></div>
        {/* form */}
        {isRegister ? <Register /> : <Login />}
      </div>
    </section>
  );
};

export default SignInPage;
