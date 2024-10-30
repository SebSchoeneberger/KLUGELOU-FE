import axios from 'axios';
import { getToken } from '../../utils/tokenUtils';

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

export function getAdmin () {
    const token = getToken();
        
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

export function changePassword (oldPassword, newPassword) {
    const token = getToken();
    
    return axios.post(`${API_URL}/admin/change-password`, { currentPassword: oldPassword, newPassword }, {
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

