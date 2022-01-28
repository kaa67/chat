import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:80/api',
    headers: {
        'Content-type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
});

export default http;
