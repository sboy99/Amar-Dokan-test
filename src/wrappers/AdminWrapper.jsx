// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { layout } from "../app/store";
// import { setSidebarOpen } from "../features";

const AdminWrapper = ({ children }) => {
  // const dispatch = useDispatch();
  // const { width } = useSelector(layout);

  // useEffect(() => {
  //   if (width > 1280) dispatch(setSidebarOpen(true));
  //   //eslint-disable-next-line
  // }, [width]);

  return children;
};

export default AdminWrapper;
