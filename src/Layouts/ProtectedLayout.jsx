import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider.jsx";
import AdminNavbar from "../Components/AdminNavbar.jsx";

function ProtectedLayout() {
    const { admin, loading } = useContext(AuthContext);

    // Prevent redirect until loading is false
    if (loading) {
        return <div>Loading...</div>; // Optional: display a spinner or loading message
    }

    return <>{admin ? <div><AdminNavbar /><Outlet /></div> : <Navigate to="/admin/login" />}</>;
}

export default ProtectedLayout;
