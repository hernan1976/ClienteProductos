import axios from 'axios';

//creando cliente axios
const clienteAxios = axios.create({

    baseURL: process.env.backendURL
});

export default clienteAxios;