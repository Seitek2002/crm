import TokenService from './TokenService';
import api from '../api';

const AuthService = {
    login: function (userData) {
        return api.post(`/api/v1/login/`, { ...userData }).then(response => {
            if (response.data.access) {
                TokenService.setUser(response.data);
            }
            return response.data;
        });
    },

    logout: function () {
        TokenService.removeUser();
    },
};

export default AuthService;
