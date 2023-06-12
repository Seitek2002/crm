import TokenService from './TokenService';
import api from '../api';

const AccountingService = {
    getAll: function () {
        return api
            .get(`accounting_features/`, {
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
            .post(`accounting_features/`, data, {
                headers: {
                    Authorization: `JWT ${TokenService.getLocalAccessToken()}`,
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response?.data);
    },
};

export default AccountingService;
