import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute(props) {
    const isAuthenticated = localStorage.getItem('accessToken');
    const location = useLocation();
  
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      return <Navigate to="/" state={{ from:location }} replace />;
    }
  
    return props.children;
  }
  export default ProtectedRoute;