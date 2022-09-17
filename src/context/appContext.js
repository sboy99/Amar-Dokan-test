import React, { useContext, createContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../features";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());

    //eslint-disable-next-line
  }, []);

  const values = {};
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;

export const useAppContext = () => useContext(AppContext);
