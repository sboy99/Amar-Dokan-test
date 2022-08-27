import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { auth } from "../../app/store";

const HeadLine = ({ Icon, className }) => {
  const { isSuccess, isError, message } = useSelector(auth);
  const shakeObj = useRef(null);

  useEffect(() => {
    const shake = shakeObj.current;
    if (message) {
      shake.classList.add("shake");
    } else {
      shake.classList.remove("shake");
    }

    return () => {
      shake.classList.remove("shake");
    };
  }, [message]);

  return (
    <div ref={shakeObj} className="mb-6 flex items-center gap-2">
      <Icon
        className={`h-10 w-10 ${className} ${
          isSuccess && `!fill-emerald-500 !text-emerald-500`
        } ${isError && `!fill-rose-600  !text-rose-600`}`}
      />
      <p
        className={`font-semibold ${isSuccess && `text-emerald-500`} ${
          isError && `text-rose-500`
        }`}
      >
        {message}
      </p>
    </div>
  );
};

export default HeadLine;
