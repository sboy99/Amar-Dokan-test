import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { PW_REGX } from "../../data";
import { useFormikError } from "../../hooks";
import { FormikFormLayout, FormikInput } from "../../utils";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { auth } from "../../app/store";
import { useAuth } from "../../context/authContext";
import { useLocation } from "react-router-dom";

const validationSchema = yup.object({
  newPassword: yup
    .string()
    .required(`Please provide new password`)
    .matches(
      PW_REGX,
      `Minimum 6 characters,at least one letter and one number`
    ),
  confirmPassword: yup
    .string()
    .required(`Please confirm your password`)
    .when("newPassword", {
      is: (newPassword) => (newPassword?.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("newPassword")], `Password doesn't match`),
    }),
});

const useQuery = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

const ResetPassword = () => {
  const { isLoading } = useSelector(auth);
  const { resetPassword } = useAuth();
  const params = useQuery();

  const onSubmit = ({ newPassword }) => {
    const oobCode = params.get("oobCode");
    const continueUrl = params.get("continueUrl");
    resetPassword(oobCode, newPassword, continueUrl);
  };

  const formik = useFormik({
    initialValues: {
      newPassword: ``,
      confirmPassword: ``,
    },
    validateOnBlur: true,
    validateOnMount: true,
    validationSchema,
    onSubmit,
  });
  const formikError = useFormikError(formik);

  return (
    <FormikFormLayout
      Icon={ArrowPathIcon}
      iconColor="text-teal-500"
      handleSubmit={formik.handleSubmit}
      headTitle="Reset Password"
      headTitleColor="from-teal-500 to-cyan-400"
      grettings="Don't let go exciting offers,Sing Up now!"
      submitDisabled={!formik.isValid || isLoading}
      submitText={isLoading ? "Updating..." : "Reset"}
      submitColor="from-teal-500 to-cyan-500"
    >
      <FormikInput
        name="New Password"
        label="newPassword"
        type="password"
        placeholder="minimum 6 characters"
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formikError}
      />
      <FormikInput
        label="confirmPassword"
        name="Confirm Password"
        type="password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formikError}
      />
    </FormikFormLayout>
  );
};

export default ResetPassword;
