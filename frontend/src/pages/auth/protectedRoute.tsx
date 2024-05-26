import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const user = localStorage.getItem("token");
  const navigate = useNavigate();

  const isAuthenticated = user ? true : false;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return element;
};

export default ProtectedRoute;
