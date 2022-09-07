import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { useFormikError } from "../../hooks";
import { FormikInput, Submit } from "../../utils";

const validationSchema = yup.object({
  email: yup
    .string()
    .required(`Please provide your email`)
    .email(`Please provide a valid email`),
});

const GetInTouch = () => {
  const onSubmit = (values) => {
    // Todo: Connect with email provider
    console.log(values);
    formik.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      email: ``,
    },
    validateOnBlur: true,
    validateOnMount: true,
    validationSchema,
    onSubmit,
  });
  const formikError = useFormikError(formik);

  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 p-4 py-12 md:py-16 ">
      <h1 className="flex flex-col items-center gap-y-2 text-center">
        <p className="text-lg font-semibold capitalize leading-none tracking-tight text-rose-500 md:text-2xl">
          Get in touch
        </p>
        <p className="max-w-xs font-lexend text-4xl font-extrabold capitalize leading-8 tracking-tighter text-slate-700 md:-ml-2 md:max-w-lg md:text-6xl">
          Get latest updates from us
        </p>
        <p className="max-w-lg text-lg leading-5 tracking-tight text-slate-500 md:leading-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi,
          autem! Non laboriosam aliquam voluptas eveniet!
        </p>
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="grid h-full w-full items-center"
      >
        <div className="mx-auto w-[20rem]">
          <FormikInput
            label="email"
            placeholder="user@example.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formikError}
          />
          <Submit
            className="w-full bg-gradient-to-r from-rose-600 to-pink-500 tracking-tight"
            disabled={!formik.isValid}
          >
            Subscribe
          </Submit>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
