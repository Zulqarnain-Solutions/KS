import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


/*
This component protects routes
*/

function ProtectedRoutes({ children }) {

  const { user, loading } = useAuth();

  // Wait until auth check is complete
  if (loading) {
    return <p>Checking authentication...</p>;
  }

  // If user NOT logged in → redirect
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // If logged in → allow access
  return children;
}

export default ProtectedRoutes;