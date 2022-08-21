import { useState, useEffect } from "react";

export const useResize = (window) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const calcWidth = () => setWidth(window?.innerWidth);
    window.addEventListener("resize", calcWidth);

    return () => window.removeEventListener("resize", calcWidth);
    //eslint-disable-next-line
  }, []);

  return [width];
};
