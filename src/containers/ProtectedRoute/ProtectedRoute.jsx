import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import UserContext from "../../contexts/UserContext";

const ProtectedRoute = () => {
  const {
    user: { isLoggedIn },
  } = useContext(UserContext);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
