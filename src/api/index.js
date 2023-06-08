import axios from 'axios';
import { BASE_URL } from '../constants';
import store from '../store/index';
import router from '../router/index';
const config = {
    headers: {
        'content-type': 'application/json',
    },
};
const instance = axios.create({
    baseURL: `${BASE_URL}/`,
    ...config,
});

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            !originalRequest._retry &&
            originalRequest?.url != '/api/v1/login/'
        ) {
            store.dispatch('auth/sessionExpired');
            router.push('/login');
        }
        // Handle other error scenarios
        return Promise.reject(error);
    }
);

export default instance;
