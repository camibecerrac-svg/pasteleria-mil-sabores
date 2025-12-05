import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { token, role } = useContext(AuthContext);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Ruta admin
    if (window.location.pathname.startsWith("/admin") && role !== "ADMIN") {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
