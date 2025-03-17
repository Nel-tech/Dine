import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoute = ({
  children,
  allowedRoles,
}: {
  children: JSX.Element;
  allowedRoles: string[];
}) => {
  const { user, loading, role } = useAuth();

  console.log("🔍 ProtectedRoute Debugging:");
  console.log("User:", user);
  console.log("Role:", role);
  console.log("Allowed Roles:", allowedRoles);

  if (loading) {
    console.log("⏳ ProtectedRoute - Waiting for AuthProvider to Load...");
    return <h1 className="text-center text-3xl">Loading...</h1>;
  }

  if (!user) {
  console.log("⛔ Redirecting to /signin - No user found");
  return <Navigate to="/signin" />;
}
if (!allowedRoles.includes(role || "")) {
  console.log(`⛔ Redirecting to / - Role "${role}" not allowed`);
  return <Navigate to="/" />;
}
  return children;
};


export default ProtectedRoute;
