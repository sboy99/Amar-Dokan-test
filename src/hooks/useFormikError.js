export const useFormikError = (formik) => {
  return (feild) => {
    return formik.touched[feild] && formik.errors[feild]
      ? formik.errors[feild]
      : ``;
  };
};
