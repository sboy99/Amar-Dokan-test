import React, { useContext, createContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../features";
import { setWidth } from "../features";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());

    //eslint-disable-next-line
  }, []);

  //> Store current width
  useEffect(() => {
    function calculateWidth() {
      dispatch(setWidth(window.innerWidth));
    }
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
    //eslint-disable-next-line
  }, []);

  const values = {};
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;

export const useAppContext = () => useContext(AppContext);
