<template>
  <div id="app">
    <login />
  </div>
</template>
<script>
import login from "@/views/login";
export default {
  name: "app",
  components: {
    login
  }
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: PingFangSC-Semibold, PingFang SC;
}
.input-icon {
  width: 32px;
  height: 32px;
  margin-bottom: -8px;
}
.mform {
  .van-field {
    border-bottom: 1px solid #ebedf0;
  }
}
.time-down {
  .van-count-down {
    color: #d3d4d9;
  }
}
input::-webkit-input-placeholder,
input::-moz-placeholder,
input:-moz-placeholder,
input:-ms-input-placeholder {
  color: #d3d4d9;
}
</style>
