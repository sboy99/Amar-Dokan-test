import React from "react";
import { HeadLine } from "../components";
import Submit from "./Submit";

const FormikFormLayout = ({
  children,
  Icon,
  iconColor = "fill-indigo-600 text-indigo-600",
  handleSubmit,
  headTitle,
  headTitleColor = "from-violet-700 to-blue-600",
  grettings,
  submitDisabled,
  submitText,
  submitColor = "from-indigo-600 to-violet-600",
  navigation = false,
  navigationMessage,
  handleNavigation = () => {},
  navigationText,
  linkColor = "text-sky-500",
}) => {
  return (
    <div className="mx-auto w-full max-w-sm py-10 px-4">
      <HeadLine Icon={Icon} className={iconColor} />
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="mb-4">
          <h1
            className={`bg-gradient-to-r ${headTitleColor} bg-clip-text pb-2 font-poppins text-4xl font-bold text-transparent`}
          >
            {headTitle}
          </h1>
          <p className=" pl-1 text-sm font-medium text-slate-500">
            {grettings}
          </p>
        </div>
        {children}
        <Submit
          disabled={submitDisabled}
          className={`bg-gradient-to-r ${submitColor}`}
        >
          {submitText}
        </Submit>
      </form>
      {/* // navigation */}
      {navigation && (
        <div
          className="mt-3
       flex flex-col items-center justify-center"
        >
          <p className="text-lg font-semibold capitalize tracking-tight text-slate-600">
            {navigationMessage}
          </p>
          <button
            type="button"
            className={`${linkColor} " text-lg font-semibold`}
            onClick={handleNavigation}
          >
            {navigationText}
          </button>
        </div>
      )}
    </div>
  );
};

export default FormikFormLayout;
