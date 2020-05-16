<template>
  <div class="headerCom">
    <van-icon
      v-if="routerName && noReturn"
      class="closed"
      @click="closed"
      size="36"
      name="arrow-left"
    />
    <div class="title">{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: "headerCom",
  props: {
    title: String,
    routerName: String,
    noReturn: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    closed() {
      // 返还上一级
      this.$router.replace({ name: this.routerName });
    }
  }
};
</script>
<style lang="scss" scoped>
.headerCom {
  position: relative;
  padding: 0 56px;
  height: 300px;
  line-height: 300px;
  background-image: url("http://image.jufengchaopao.com/JPIC15893684446562218.png");
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  font-size: 40px;
  .closed {
    position: absolute;
    left: 0;
    top: 0;
    width: 80px;
    height: 100px;
    text-align: center;
    line-height: 100px;
  }
}
</style>
