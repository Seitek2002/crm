import ReceiptService from '../../services/ReceiptService';

export const receipt = {
    namespaced: true,
    state: {
        list: [],
        detail: {
            
        }
    },
    actions: {
        async getAll({ commit }) {
            ReceiptService.getAll()
                .then(products => {
                    commit('updateList', products);
                    return Promise.resolve(products);
                })
                .catch(error => {
                    console.log('err', error);
                    return Promise.reject(error);
                });
        },
        async getOneById({ commit }, id) {
            ReceiptService.getOneById(id)
                .then(contractors => {
                    commit('updateOneEntity', contractors);
                    return Promise.resolve(contractors);
                })
                .catch(error => {
                    console.log('err', error);
                    return Promise.reject(error);
                });
        },
        async create({ dispatch }, data) {
            const response = ReceiptService.create(data)
                .then(products => {
                    dispatch('getAll');
                    return Promise.resolve(products);
                })
                .catch(error => {
                    return Promise.reject(error);
                });

            return response;
        },
    },
    mutations: {
        updateList(state, data) {
            const updatedList = data;
            state.list = updatedList;
        },
        updateOneEntity(state, data) {
            state.detail = data;
        },
    },
};
