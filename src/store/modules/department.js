import RequestService from "@/api";
import { BASE_URL } from "@/constants";

const initialState = {
  departments: [],
};

export const state = () => initialState;

export const getters = {};

export const mutations = {};

export const actions = {
  async fetchDepartments({ state, commit }) {
    let result = await RequestService.sendRest({
      method: "get",
      baseURL: BASE_URL,
      url: `/department/`,
    });
    state.departments = result;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
