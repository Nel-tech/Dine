import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }: { children: JSX.Element; allowedRoles: string[] }) => {
  const { user, loading, role } = useAuth(); 

  if (loading) {
    return <h1 className="text-center text-3xl">Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  if (!allowedRoles.includes(role || "")) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
