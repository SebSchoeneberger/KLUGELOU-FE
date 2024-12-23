import axios from 'axios';
import { getToken } from '../../utils/tokenUtils';

const API_URL = import.meta.env.VITE_API_URL;

export function fetchStones() {

    return axios.get(`${API_URL}/stones`)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.log(err);
            return [];
        });
}


export function fetchStoneById(idOrName) {
    
    const formattedName = idOrName.replace(/ /g, '_');
    return axios.get(`${API_URL}/stones/${formattedName}`)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.error(err);
            return null; 
        });
}

export function deleteStone(id) {
    const token = getToken();

    return axios.delete(`${API_URL}/stones/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
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

export function createStone(data) {
    const token = getToken();

    return axios.post(`${API_URL}/stones`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.error(err);
            return null;
        });
}

export function updateStone(id, data) {
    const token = getToken();

    return axios.put(`${API_URL}/stones/${id}`, data, {
        headers: {  
            Authorization: `Bearer ${token}`
        },  
    })
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.error(err);
            return null;
        });
}

export function uploadStoneImage(id, file) {
    const token = getToken();
    const formData = new FormData();
    formData.append('image', file);

    return axios.post(`${API_URL}/stones/${id}/upload-image`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
    })
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.error(err);
            return null;
        });

}