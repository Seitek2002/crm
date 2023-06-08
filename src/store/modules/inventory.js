import InventoryService from '../../services/InventoryService';

export const inventory = {
    namespaced: true,
    state: {
        list: [],
        detail: {
            
        },
    },
    actions: {
        async getAll({ commit }) {
            InventoryService.getAll()
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
            InventoryService.getOneById(id)
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
            const response = InventoryService.create(data)
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
