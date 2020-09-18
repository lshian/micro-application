import Vue from 'vue';
import Vuex from 'vuex';
import { questMenuInfo } from '@/apis/common'

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
    fetchmenuInfo (state, value) {
      questMenuInfo(value).then(res => {
        console.log(res)
      });
    }
  }
};

export default userStore;
