import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export function adminSignIn (email, password) {
    
    return axios.post(`${API_URL}/admin/login`, { email, password })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err);
            return null;
        });
};

export function getAdmin (token) {
        
        return axios.get(`${API_URL}/admin/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.error(err);
                return null;
            });
}

