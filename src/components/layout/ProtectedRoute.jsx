import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../app/store";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector(auth);
  const location = useLocation();

  if (!user) {
    return <Navigate to={`/`} state={{ from: location }} replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
