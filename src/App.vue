<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive :exclude="['login']">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      let toLevel = to.meta.level || 0;
      let fromLevel = from.meta.level || 0;
      if (toLevel == fromLevel) {
        this.transitionName = "";
        return;
      }
      if (toLevel > fromLevel) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
.container {
  width: 100%;
}
#app {
  // font-family: PingFangSC-Semibold, PingFang SC;

  width: 100%;
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

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-enter {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
