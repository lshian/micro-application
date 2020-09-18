import Vue from 'vue';
import Vuex from 'vuex';
import global from './global';
import menu from './menu'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    global,
    menu
  }
});

export default store;
