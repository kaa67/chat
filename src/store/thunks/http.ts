import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:80/api',
    headers: { 'Content-type': 'application/json' },
});

export default http;
