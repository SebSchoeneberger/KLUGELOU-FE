import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider.jsx";

function ProtectedLayout() {
    const { admin, loading } = useContext(AuthContext);

    // Prevent redirect until loading is false
    if (loading) {
        return <div>Loading...</div>; // Optional: display a spinner or loading message
    }

    return <>{admin ? <Outlet /> : <Navigate to="/admin/login" />}</>;
}

export default ProtectedLayout;
