<template>
  <div id="app">
    <transition :name="transitionName">
      <!--应该在router meta 里表示是否 keep alive 生成数组  暂时放者 -->
      <keep-alive
        :max="5"
        :exclude="[
          'login',
          'cardId',
          'cardDrive',
          'insurance',
          'carImgs',
          'carInfo',
          'cardId',
          'insurance',
          'carDesc',
          '404',
          'loading'
        ]"
      >
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>
<script>
import { Toast } from "vant";
import Cookie from "js-cookie";
export default {
  name: "App",
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
  },
  created() {
    Toast.setDefaultOptions({ duration: 1000 });
    Toast.setDefaultOptions("loading", { forbidClick: true });
  },
  destroyed() {
    Cookie.remove("recommendId");
  },
  methods: {}
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
