import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      userId: ""
    }
  },
  mutations: {
    SET_USER_INFO: (state, { userId }) => {
      state.userInfo.userId = userId;
    }
  },
  actions: {},
  modules: {}
});
