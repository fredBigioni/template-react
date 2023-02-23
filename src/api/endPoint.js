/********************************************************/
/*          Archivo de Configuración de Axios           */
/********************************************************/

import axios from 'axios';
// import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = import.meta.env;// process.env; // getEnvVariables();

const endPoint = axios.create({
    baseURL: VITE_API_URL
})

const token = localStorage.getItem('x-token');
//Request interceptors (para agregarle el jwt)
endPoint.interceptors.request.use(config => {
    config.headers = {
        //Agrego los headers que necesite
        ...config.headers,
        Authorization: `Bearer ${token}`
    }

    return config;
})

export default endPoint;
