import TokenService from './TokenService';
import api from '../api';

const Barcode_nameService = {
    getAll: function () {
        return api
            .get(`nds/`, {
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
            .post(`nds/`, data, {
                headers: {
                    Authorization: `JWT ${TokenService.getLocalAccessToken()}`,
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response?.data);
    },
};

export default Barcode_nameService;
