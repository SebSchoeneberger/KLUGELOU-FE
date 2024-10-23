import axios from 'axios';

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


export function fetchStoneById(id) {

    return axios.get(`${API_URL}/stones/${id}`)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.error(err);
            return null; 
        });
}

