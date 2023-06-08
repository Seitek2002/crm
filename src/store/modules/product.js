import ProductService from '../../services/ProductService';

export const products = {
    namespaced: true,
    state: {
        list: [],
        detail: {}
    },
    actions: {
        async getAll({ commit }) {
            ProductService.getAll()
                .then(products => {
                    commit('updateProducts', products);
                    return Promise.resolve(products);
                })
                .catch(error => {
                    console.log('err', error);
                    return Promise.reject(error);
                });
        },
        async getOneById({ commit }, id) {
            ProductService.getOneById(id)
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
            const response = ProductService.createProduct(data)
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
        updateProducts(state, data) {
            const updatedList = data;
            state.list = updatedList;
        },
        updateOneEntity(state, data) {
            state.detail = data;
        },
    },
};
