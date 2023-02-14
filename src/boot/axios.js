import axios from 'axios';

let config = {
    baseURL: "http://0.0.0.0:5115/e_commerce",
    headers: { 
        'Cache-Control': 'no-cache, must-revalidate', 
        'Pragma': 'no-cache', 
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json' },
    timeout: 120000
};

const api = axios.create(config);
export { api };