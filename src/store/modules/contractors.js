import ContractorService from '../../services/ContractorService';
export const contractors = {
    namespaced: true,
    state: {
        list: [],
        detail: {},
    },
    actions: {
        async getAll({ commit }) {
            ContractorService.getAll()
                .then(contractors => {
                    commit('updateContractors', contractors);
                    return Promise.resolve(contractors);
                })
                .catch(error => {
                    console.log('err', error);
                    return Promise.reject(error);
                });
        },
        async getOneById({ commit }, id) {
            ContractorService.getOneById(id)
                .then(contractors => {
                    commit('updateOneContractor', contractors);
                    return Promise.resolve(contractors);
                })
                .catch(error => {
                    console.log('err', error);
                    return Promise.reject(error);
                });
        },
        async create({ dispatch }, data) {
            const response = ContractorService.createContractor(data)
                .then(contractors => {
                    dispatch('getAll');
                    return Promise.resolve(contractors);
                })
                .catch(error => {
                    return Promise.reject(error);
                });

            return response;
        },
    },
    mutations: {
        updateContractors(state, data) {
            state.list = data;
        },
        updateOneContractor(state, data) {
            state.detail = data;
        },
    },
};
