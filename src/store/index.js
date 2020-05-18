import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      userId: ""
    },
    // 邀请码
    recommendId: null,
    // 当前查看车辆的id;
    carId: "",
    // 身份证
    cardId: {},
    // 行驶证
    cardDriver: [],
    // 交强险或商业险
    insurance: [],
    // 车辆图片
    carImgs: [],
    // 车辆详细信息
    carInfo: {},
    // 车辆描述
    carDesc: ""
  },
  mutations: {
    SET_USER_INFO: (state, { userId }) => {
      state.userInfo.userId = userId;
    },
    SET_RECOMMEND_ID: (state, data) => {
      state.recommendId = data;
    },
    SET_CAR_ID: (state, data) => {
      state.carId = data;
    },
    SET_CARD_ID: (state, data) => {
      state.cardId = data;
    },
    SET_CARD_DRIVER: (state, data) => {
      state.cardDriver = data;
    },
    SET_INSURANCE: (state, data) => {
      state.insurance = data;
    },
    SET_CAR_IMGS: (state, data) => {
      state.carImgs = data;
    },
    SET_CAR_INFO: (state, data) => {
      state.carInfo = data;
    },
    SET_CAR_DESC: (state, data) => {
      state.carDesc = data;
    }
  },
  actions: {},
  modules: {}
});
