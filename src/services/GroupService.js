import TokenService from './TokenService';
import api from '../api';

const GroupService = {
    getAll: function () {
        return api
            .get(`groups/`, {
                headers: {
                    Authorization: `JWT ${TokenService.getLocalAccessToken()}`,
                },
            })
            .then(response => response?.data)
            .catch(error => {
                console.error(error);
            });
    },
    create: function (data) {
        return api
            .post(`groups/`, data, {
                headers: {
                    Authorization: `JWT ${TokenService.getLocalAccessToken()}`,
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response?.data);
    },
};

export default GroupService;
