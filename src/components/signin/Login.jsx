import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { HeadLine } from "..";
import { FormikCheckBox, FormikInput, Submit } from "../../utils";
import { useFormikError } from "../../hooks";
import { LightningBoltIcon } from "@heroicons/react/outline";

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
  const onSubmit = (values) => {
    //todo: Form Submit...
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      email: ``,
      password: ``,
      remember: false,
    },
    validateOnBlur: true,
    onSubmit,
    validateOnMount: true,
    validationSchema,
  });
  const formikError = useFormikError(formik);

  const handleSignUp = () => {
    //todo: handle sign up button click
  };

  const handleForgotPass = () => {
    //todo: handle forgot password button click
  };

  return (
    <div className="mx-auto w-full max-w-sm py-10">
      <HeadLine Icon={LightningBoltIcon} />
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
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
            className="px-3 py-1 font-poppins font-medium capitalize text-indigo-600 outline-none focus:bg-indigo-50"
            onClick={handleForgotPass}
          >
            forgot password
          </button>
        </div>

        <Submit disabled={!formik.isValid}>Sign In</Submit>
      </form>
      {/* // new user */}
      <div
        className="mt-3
       flex flex-col items-center justify-center"
      >
        <p className="text-lg font-semibold capitalize tracking-tight text-slate-600">
          So excited to be with you
        </p>
        <button
          type="button"
          className="text-lg font-semibold text-sky-500"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
