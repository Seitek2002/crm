import RequestService from "@/api";
import { BASE_URL } from "@/constants";

const initialState = {
  purchases: [],
};

export const state = () => initialState;

export const getters = {};

export const mutations = {};

export const actions = {
  async fetchPurchases({ state, commit }) {
    let result = await RequestService.sendRest({
      method: "get",
      baseURL: BASE_URL,
      url: `/products/`,
    });
    state.products = result;
  },
  async addPurchase({ state }, params) {
    let result = await RequestService.sendRest({
      method: "post",
      baseURL: BASE_URL,
      url: `/warehouse/`,
      data: params,
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
