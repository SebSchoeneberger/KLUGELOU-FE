import { createContext, useState, useEffect } from "react";
import { adminSignIn, getAdmin } from "../services/adminAPI.js";
import { getToken, storeToken } from "../../utils/tokenUtils.js";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (email, password) => {
        setLoading(true);
        try {
            const response = await adminSignIn(email, password);
            if (response && response.success) {
                setAdmin(response.admin);
                storeToken(response.token);
                return true;
            } else {
                console.error("Login failed: ", response?.message || "Unknown error");
                return false;
            }
        } catch (error) {
            console.error("Error during login:", error);
            storeToken(null);
            return false;
        } finally {
            setLoading(false);
        }};

    const logout = () => {
            setAdmin(null);
            storeToken(null);
        };


    useEffect(() => {

        const token = getToken();
        if (!token) {
            setLoading(false);
            return;
        }

        setLoading(true);
        getAdmin(getToken())
            .then((response) => {

                if (response && response.success) {
                    setAdmin(response.admin);
                } else {
                    console.error("Admin fetch failed:", response?.message || "Unknown error");
                    setAdmin(null);
                    storeToken(null);
                }
            })
            .catch((error) => {
                console.error("Error during admin fetch:", error);
                setAdmin(null);
                storeToken(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);


    return <AuthContext.Provider value={{login, logout, admin, loading}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;