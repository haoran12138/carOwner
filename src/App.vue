<template>
  <div id="app">
    <keep-alive :exclude="['login']">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  // font-family: PingFangSC-Semibold, PingFang SC;
  overflow: hidden;
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
</style>
