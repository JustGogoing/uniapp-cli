/**
 * vuex基本配置
 */
import Vue from 'vue';
import Vuex from 'vuex';
import userModel from './modules/user/index.js';
Vue.use(Vuex);

export default new Vuex.Store({
  namespace: true,
  module: {
    userModel
  }
})
