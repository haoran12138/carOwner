<template>
  <div class="container">
    <div class="header">
      <header-com title="我的车辆"></header-com>
    </div>
    <van-swipe-cell style="margin:10px 0" v-for="item in 10" :key="item">
      <van-card
        @click="handleClickCar"
        desc="沪a34343"
        title="奔驰 AUG"
        :centered="true"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">待完善</van-tag>
        </template>
      </van-card>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
    <div class="btn-box">
      <van-button round class="add-btn" color="#E63D33" block @click="handleAdd"
        >添加新车辆</van-button
      >
    </div>
  </div>
</template>
<script>
import headerCom from "@/components/headerCom";
export default {
  name: "carList",
  data() {
    return {};
  },
  components: { headerCom },
  created() {},
  methods: {
    handleAdd() {
      this.$router.replace({ name: "basicInfo" });
    },
    handleClickCar() {
      console.log("aaa");
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding-bottom: 250px;
}
.btn-box {
  position: fixed;
  bottom: 100px;
  padding: 0 40px;
  width: 40%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.8;
}
.delete-button {
  height: 100%;
}
</style>
