import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";

export function RequiresAuth({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/Login" state={{ from: location }} />
  );

  //State Passes the Previous Address of Route (Which is ./Address)
}
