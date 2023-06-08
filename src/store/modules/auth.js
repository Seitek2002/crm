import AuthService from '../../services/AuthService';
import { Quasar, Notify } from 'quasar';
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            return AuthService.login(user).then(
                user => {
                    commit('loginSuccess', user);
                    return Promise.resolve(user);
                },
                error => {
                    console.log('err');
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            );
        },
        logout({ commit }) {
            AuthService.logout();
            commit('logout');
        },
        sessionExpired({ dispatch }) {
            dispatch('logout');
            Notify.create({
                message:
                    'Ваша сессия закончена. Пожалуйста, выполните вход снова.',
                type: 'negative',
                position: 'top',
                timeout: 5000,
            });
        },
        // register({ commit }, user) {
        //     return AuthService.register(user).then(
        //         response => {
        //             commit('registerSuccess');
        //             return Promise.resolve(response.data);
        //         },
        //         error => {
        //             commit('registerFailure');
        //             return Promise.reject(error);
        //         }
        //     );
        // },
        // refreshToken({ commit }, accessToken) {
        //     commit('refreshToken', accessToken);
        // },
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        // registerSuccess(state) {
        //     state.status.loggedIn = false;
        // },
        // registerFailure(state) {
        //     state.status.loggedIn = false;
        // },
        refreshToken(state, access) {
            state.status.loggedIn = true;
            state.user = { ...state.user, access };
        },
    },
};
