import React, { useEffect } from "react";
import { useFormik } from "formik";
import { GLogo, PW_REGX } from "../../data";
import * as yup from "yup";
import { useFormikError } from "../../hooks";
import { LightBulbIcon } from "@heroicons/react/24/outline";
import { FormikFormLayout, FormikCheckBox, FormikInput } from "../../utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setRegister } from "../../features/AuthSlice";
import { useAuth } from "../../context/authContext";
import { auth } from "../../app/store";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, `Name should consist atleast 2 character`)
    .max(50, `Name should be atmost 50 character`)
    .required(`Please provide a name`),
  email: yup
    .string()
    .required(`Please provide your email`)
    .email(`Plase provide a valid email`),
  password: yup
    .string()
    .required(`Password is required`)
    .matches(
      PW_REGX,
      `Minimum 6 characters,at least one letter and one number`
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], `Password does not match`),
    }),
  termAccepted: yup.boolean().required().isTrue(),
});

const Register = () => {
  const { isSuccess, isLoading } = useSelector(auth);
  const dispatch = useDispatch();
  const { createUser, loginWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      formik.resetForm();
      navigate("/", { state: { from: location }, replace: true });
    }
    //eslint-disable-next-line
  }, [isSuccess]);

  // Formik object
  const formik = useFormik({
    initialValues: {
      name: ``,
      email: ``,
      password: ``,
      confirmPassword: ``,
      termAccepted: false,
    },
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: createUser,
    validationSchema,
  });
  const formikError = useFormikError(formik);

  const handleSignIn = () => {
    dispatch(setRegister(false));
  };

  return (
    <FormikFormLayout
      Icon={LightBulbIcon}
      iconColor="fill-sky-500 text-sky-500"
      handleSubmit={formik.handleSubmit}
      headTitle="Jump In"
      headTitleColor="from-blue-500 to-sky-400"
      grettings="Don't let go exciting offers,Sing Up now!"
      submitDisabled={!formik.isValid || isLoading}
      submitText={isLoading ? "Registering..." : "Sign Up"}
      submitColor="from-blue-600 to-sky-500"
      navigation={true}
      navigationMessage="Already have an account?"
      navigationText="Sign In"
      handleNavigation={handleSignIn}
      linkColor="text-indigo-600"
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
        name="Full Name"
        label="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formikError}
      />
      <FormikInput
        label="email"
        value={formik.values.email}
        placeholder="user@website.com"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formikError}
      />
      <FormikInput
        label="password"
        type="password"
        placeholder="minimum 6 characters"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formikError}
      />

      <FormikInput
        name="Confirm Password"
        label="confirmPassword"
        type="password"
        placeholder="Re-enter your password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formikError}
      />

      <div className="flex items-center ">
        <FormikCheckBox
          name="termAccepted"
          value={formik.values.termAccepted}
          onChange={formik.handleChange}
        >
          I agree with
          <Link
            className="inline-block px-2 py-1 text-lg font-medium text-indigo-600 outline-none focus:bg-sky-100"
            to="/terms-conditions"
          >
            Terms & Conditions
          </Link>
        </FormikCheckBox>
      </div>
    </FormikFormLayout>
  );
};

export default Register;
