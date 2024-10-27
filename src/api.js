// client/src/api.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api', // Change this URL to your deployed backend URL after deploying.
});

export default instance;
