import RequestService from "@/api";
import { FOMS_API_URL } from "@/constants";

const initialState = {};

export const state = () => initialState;

export const getters = {};

export const mutations = {};

export const actions = {
  async getInfoByPin({ state, commit }, { pin }) {
    let result = await RequestService.sendRest({
      method: "get",
      baseURL: FOMS_API_URL,
      url: `/api/v1/mhi/${pin}`,
    });

    return result;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
