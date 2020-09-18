import Vue from 'vue';
import Vuex from 'vuex';
import { baseURL } from '@/utils/request';

Vue.use(Vuex);

const state = {
  microLoading: false,
  value: ''
};

const userStore = {
  state,

  getters: {},

  mutations: {
    /** 设置站点信息 */
    setValue (state, value) {
      state.value = value;
    },

    changeMicroLoading (state, loading) {
      state.microLoading = loading
    }
  },

  actions: {
    async fetchWebsiteInfo ({commit}, value) {
      const response = await queryWebsiteInfo(value);
    }
  }
};

export default userStore;
