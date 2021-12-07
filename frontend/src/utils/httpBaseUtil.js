import axios from 'axios';

import {API_URL, JWT_TOKEN} from '../config/config';
import {getLocalStorage} from './storageUtil';

export const httpBase = () => {
    const api = axios.create({
        baseURL: `/api/v1/`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getLocalStorage(JWT_TOKEN)
        },
        responseType: 'json'
    });

    api.interceptors.response.use((response) => {
        return response;
    }, error => {

        if (401 === error.response.status) {
            // redirect to login page
        }
        if (404 === error.response.status) {
            // redirect to 404 page
        }
        if (500 === error.response.status) {
            // redirect to 500 page
        }
        return Promise.reject(error);

    });

    return api;
};