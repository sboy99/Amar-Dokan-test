import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { HeadLine } from "..";
import {
  FormikCheckBox,
  FormikInput,
  Submit,
  FormikFormLayout,
} from "../../utils";
import { useFormikError } from "../../hooks";
import { LightningBoltIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { setRegister, setForgotPassword } from "../../features/AuthSlice";

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
  const dispatch = useDispatch();

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
    dispatch(setRegister(true));
  };

  const handleForgotPass = () => {
    dispatch(setForgotPassword(true));
  };

  return (
    <FormikFormLayout
      Icon={LightningBoltIcon}
      handleSubmit={formik.handleSubmit}
      headTitle="Welcome Back"
      grettings="Don't let go exciting offers,Sing In now!"
      submitDisabled={!formik.isValid}
      submitText="Sign In"
      navigation={true}
      navigationMessage="So excited to be with you"
      navigationText="Sign Up"
      handleNavigation={handleSignUp}
    >
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
