<template>
  <div class="home-town-container">
    <div class="title">
      <div class="confirm" @click="handleConfirmHomeTown">完成</div>
    </div>
    <div class="main">
      <div
        class="item"
        :class="{ hover: item == homtown }"
        v-for="(item, index) in homeTownList"
        :key="index"
        @click="handleChangeHomeTown(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
import homeTownList from "@/assets/js/homeTownList.js";
export default {
  name: "homeTown",
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      homeTownList: [],
      homtown: ""
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.homtown = this.value;
      this.homeTownList = homeTownList;
    },
    handleChangeHomeTown(item) {
      this.homtown = item;
    },
    handleConfirmHomeTown() {
      this.$emit("input", this.homtown);
      this.$emit("hidePopup");
    }
  }
};
</script>
<style lang="scss" scoped>
.home-town-container {
  overflow: hidden;

  .title {
    border-bottom: 1px solid #ccc;
    height: 100px;
    line-height: 100px;
    .confirm {
      width: 160px;
      text-align: center;
      float: right;
      color: rgb(39, 114, 253);
    }
  }
  .main {
    .item {
      display: inline-block;
      width: 12.5vw;
      height: 12.5vw;
      text-align: center;
      line-height: 12.5vw;
      border: 1px solid #ccc;
      border-right: 0px;
      border-top: 0px;
    }
    .item.hover {
      background: rgb(39, 114, 253);
      color: #fff;
    }
  }
}
</style>
