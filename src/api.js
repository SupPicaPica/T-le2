import axios from 'axios';
const api = axios.create({
    baseURL: 'http://192.168.0.10:8000'
});

export default api;