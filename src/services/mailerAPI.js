import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const emailSubscribe = async (email) => {
    try {
        const response = await axios.post(`${API_URL}/mailerLite/subscribe`, { email });
        return response.data;
    } catch (error) {
        console.error("Subscription error:", error.message);
        return null;
    }
}
