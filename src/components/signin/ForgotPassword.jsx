import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { FormikFormLayout, FormikInput } from "../../utils";
import { KeyIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../app/store";
import { setForgotPassword } from "../../features/AuthSlice";
import { useFormikError } from "../../hooks";

const validationSchema = yup.object({
  email: yup
    .string()
    .required(`Plase provide your email`)
    .email(`Plase provide a valid email`),
});

const ForgotPassword = () => {
  const { isLoading } = useSelector(auth);
  const dispatch = useDispatch();

  const onSubmit = () => {};

  const formik = useFormik({
    initialValues: {
      email: ``,
    },
    validateOnBlur: true,
    onSubmit,
    validateOnMount: true,
    validationSchema,
  });
  const formikError = useFormikError(formik);

  const handleSignIn = () => {
    dispatch(setForgotPassword(false));
  };

  return (
    <FormikFormLayout
      Icon={KeyIcon}
      iconColor="text-indigo-600"
      handleSubmit={formik.handleSubmit}
      headTitle="Forgot Password"
      grettings="Don't let go exciting offers,Sing In now!"
      submitDisabled={!formik.isValid || isLoading}
      submitText={isLoading ? "Sending..." : "Send"}
      navigation={true}
      navigationMessage="Back to Sign In"
      navigationText="Sign In"
      handleNavigation={handleSignIn}
    >
      <FormikInput
        label="email"
        placeholder="user@web.com"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formikError}
      />
    </FormikFormLayout>
  );
};

export default ForgotPassword;
