import React from "react";
import { useFormik } from "formik";
import { PW_REGX } from "../../data";
import * as yup from "yup";
import { useFormikError } from "../../hooks";
import { LightBulbIcon } from "@heroicons/react/outline";
import { FormikFormLayout, FormikCheckBox, FormikInput } from "../../utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRegister } from "../../features/AuthSlice";

const validationSchema = yup.object({
  name: yup
    .string()
    .required(`Please enter your name`)
    .min(2, `minimum name should be 2`)
    .max(25, `maximum name length should be 25`),
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
  termAccepted: yup.boolean().required().isTrue(),
});

const Register = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    console.log(values);
    // todo: Handle new user register
  };

  // Formik object
  const formik = useFormik({
    initialValues: {
      name: ``,
      email: ``,
      password: ``,
      termAccepted: false,
    },
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
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
      submitDisabled={!formik.isValid}
      submitText="Sign Up"
      submitColor="from-blue-600 to-sky-500"
      navigation={true}
      navigationMessage="Already have an account?"
      navigationText="Sign In"
      handleNavigation={handleSignIn}
      linkColor="text-indigo-600"
    >
      <FormikInput
        label="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formikError}
      />
      <FormikInput
        label="email"
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
