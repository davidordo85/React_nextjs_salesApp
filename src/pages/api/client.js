import axios from 'axios';

const client = axios.create({ baseURL: process.env.API_URL });

client.interceptors.response.use(response => response.data);

export default client;
