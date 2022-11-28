import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Button } from "../../utils";
import { useAdmin } from "../../app/store";
import { useDispatch } from "react-redux";
import { resetAdminResponse } from "../../features";
import { XMarkIcon, CheckIcon, CpuChipIcon } from "@heroicons/react/24/outline";

const ToastMessage = () => {
  const {
    response: { isError, isSuccess, message },
  } = useAdmin();
  const dispatch = useDispatch();
  const [text, setText] = useState(``);

  useEffect(() => {
    if (message) setText(message);
  }, [message]);

  useEffect(() => {
    let timeOut;

    if (isError || isSuccess)
      timeOut = setTimeout(() => {
        dispatch(resetAdminResponse());
      }, 6000);

    return () => clearTimeout(timeOut);
    //eslint-disable-next-line
  }, [isError, isSuccess]);

  const resetResponse = () => dispatch(resetAdminResponse());

  return (
    <Transition
      as={React.Fragment}
      show={isError || isSuccess}
      appear
      enter="transition-all duration-700"
      enterFrom="opacity-0 transform translate-y-full"
      enterTo="opacity-100 transform translate-y-0"
      leave="transition-all duration-700"
      leaveFrom="opacity-100 transform translate-y-0 "
      leaveTo="opacity-0 transform translate-y-full"
    >
      <div
        className={`fixed inset-x-0 bottom-0 z-50 flex min-h-16 items-center justify-center gap-4 border-t border-white backdrop-blur-md ${
          isError && `!bg-rose-500`
        } ${isSuccess && `!bg-emerald-500`}`}
      >
        <div className="flex items-center gap-2 text-lg font-semibold capitalize text-white">
          <span
            className={`rounded-full bg-white text-sky-300 ${
              isError && `!text-rose-600`
            } ${isSuccess && `!text-emerald-600`} `}
          >
            {isSuccess ? (
              <CheckIcon className="h-8 w-8" />
            ) : isError ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <CpuChipIcon className="h-8 w-8" />
            )}
          </span>
          {text}
        </div>
        <Button
          className="border-2 border-white px-3 py-1 font-medium text-white"
          onClick={resetResponse}
        >
          Close
        </Button>
      </div>
    </Transition>
  );
};

export default ToastMessage;
