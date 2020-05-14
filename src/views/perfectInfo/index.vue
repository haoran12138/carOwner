<template>
  <div class="container">
    <header-com title="完善车辆信息" routerName="carList"></header-com>
    <div class="center">
      <div class="info-title">
        资料照片
      </div>
      <info-item
        routerName="cardId"
        :carryType="0"
        txt="身份证"
        :isMust="true"
      ></info-item>
      <info-item
        routerName="cardId"
        :carryType="0"
        txt="行驶证"
        :isMust="true"
      ></info-item>
      <info-item
        routerName="cardId"
        :carryType="0"
        txt="交强险或商业险"
      ></info-item>
      <div class="info-title">
        车辆信息
      </div>
      <info-item
        routerName="cardId"
        :carryType="0"
        txt="车辆基本信息"
        :isMust="true"
      ></info-item>
      <info-item routerName="cardId" :carryType="0" txt="车辆照片"></info-item>
      <info-item
        routerName="cardId"
        :carryType="0"
        txt="车辆描述"
        carryTypeN="请填写"
      ></info-item>
    </div>
    <van-overlay :show="mainLoading">
      <loading></loading>
    </van-overlay>
  </div>
</template>
<script>
import headerCom from "@/components/headerCom";
import infoItem from "./components/infoItem";
import loading from "@/components/loading";
export default {
  name: "perfectInfo",
  components: { headerCom, infoItem, loading },
  data() {
    return {
      id: "",
      mainLoading: false
    };
  },
  created() {
    this.init();
  },
  activated() {
    this.init();
  },
  methods: {
    init() {
      this.id = this.$route.query.id;
    }
  }
};
</script>
<style lang="scss" scoped>
.info-title {
  width: 100%;
  height: 80px;
  background: rgba(211, 212, 217, 1);
  font-size: 30px;
  font-weight: 400;
  color: rgba(84, 85, 87, 1);
  padding: 0 32px;
  line-height: 80px;
  opacity: 0.7;
}
</style>
