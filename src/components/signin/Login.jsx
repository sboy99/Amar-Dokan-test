import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormikCheckBox, FormikInput, FormikFormLayout } from "../../utils";
import { useFormikError } from "../../hooks";
import { BoltIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setRegister, setForgotPassword } from "../../features/AuthSlice";
import { useAuth } from "../../context/authContext";
import { auth } from "../../app/store";
import { GLogo } from "../../data";
import { useNavigate, useLocation } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string()
    .required(`Please enter your email`)
    .email(`Please enter a valid email`),
  password: yup.string().required(`Please enter your password`),
  remember: yup.boolean().required(),
});

//> Login Component
const Login = () => {
  const { isSuccess, isLoading } = useSelector(auth);
  const dispatch = useDispatch();
  const { loginUser, loginWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      formik.resetForm();
      navigate("/", { state: { from: location }, replace: true });
    }
    //eslint-disable-next-line
  }, [isSuccess]);

  const formik = useFormik({
    initialValues: {
      email: ``,
      password: ``,
      remember: false,
    },
    validateOnBlur: true,
    onSubmit: loginUser,
    validateOnMount: true,
    validationSchema,
  });
  const formikError = useFormikError(formik);

  const handleSignUp = () => {
    dispatch(setRegister(true));
  };

  const handleForgotPass = () => {
    dispatch(setForgotPassword(true));
  };

  return (
    <FormikFormLayout
      Icon={BoltIcon}
      handleSubmit={formik.handleSubmit}
      headTitle="Welcome Back"
      grettings="Don't let go exciting offers,Sing In now!"
      submitDisabled={!formik.isValid || isLoading}
      submitText={isLoading ? "Authenticating..." : "Sign In"}
      navigation={true}
      navigationMessage="So excited to be with you"
      navigationText="Sign Up"
      handleNavigation={handleSignUp}
    >
      <div
        as="button"
        onClick={loginWithGoogle}
        className="group flex h-11 w-full cursor-pointer items-center justify-center gap-4 rounded-full border border-slate-300 px-2 font-semibold text-slate-700 outline-none transition-all duration-500 ease-in-out hover:bg-white hover:!text-indigo-600 hover:shadow focus:ring-1 focus:ring-indigo-600"
      >
        <img src={GLogo} alt="google" className="w-6 gap-6 " /> Sign In with
        Google
      </div>
      <p className=" my-1 flex items-center gap-2 text-center capitalize text-slate-500">
        <div className="h-[2px] flex-auto rounded-full bg-slate-400/50"></div>
        or continue with
        <div className="h-[2px] flex-auto rounded-full bg-slate-400/50"></div>
      </p>
      <FormikInput
        label="email"
        placeholder="user@web.com"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formikError}
      />
      <FormikInput
        label="password"
        type="password"
        placeholder="min 6 character"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formikError}
      />
      <div className="flex flex-wrap-reverse items-center justify-center gap-3 sm:justify-between">
        <FormikCheckBox
          name="remember"
          value={formik.values.remember}
          onChange={formik.handleChange}
        >
          Remember Me
        </FormikCheckBox>
        <button
          type="button"
          className="px-3 py-1 font-poppins font-medium capitalize text-sky-500 outline-none focus:bg-indigo-50"
          onClick={handleForgotPass}
        >
          forgot password?
        </button>
      </div>
    </FormikFormLayout>
  );
};

export default Login;
