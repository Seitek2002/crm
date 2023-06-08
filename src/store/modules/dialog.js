export const dialog = {
    namespaced: true,
    state: {
        modal: false,
    },
    actions: {
        closePopup({ state }) {
            state.modal = false;
        },
        openPopup({ state }) {
            state.modal = true;
        },
    },
    mutations: {},
};
