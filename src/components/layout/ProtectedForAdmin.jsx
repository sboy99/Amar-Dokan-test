import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../app/store";
import { setModalOpen, setModalContext } from "../../features";

const ProtectedForAdmin = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(auth);
  const location = useLocation();
  useEffect(() => {
    if (user?.role !== "admin") {
      dispatch(setModalContext("NotAdmin"));
      dispatch(setModalOpen(true));
    }
    //eslint-disable-next-line
  }, []);

  if (user?.role !== "admin") {
    return <Navigate to={`/`} state={{ from: location }} replace={true} />;
  }

  return children;
};

export default ProtectedForAdmin;
