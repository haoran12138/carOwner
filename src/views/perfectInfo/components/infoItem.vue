<template>
  <div class="perfect-info-item" @click="handleClickItem">
    <div class="left">
      <div class="txt">
        {{ txt }}
      </div>
      <van-tag class="tag" v-if="isMust" plain type="danger">必填</van-tag>
    </div>
    <div class="right">
      <div class="txt">
        <span v-if="carryType == 0"> {{ carryTypeN }}</span>
        <span v-if="carryType == 1"> {{ carryTypeP }}</span>
        <span v-if="carryType == 2"> {{ carryTypeY }}</span>
      </div>
      <van-icon style="line-height: 6vw;" name="arrow" v-if="carryType != 2" />
    </div>
  </div>
</template>
<script>
export default {
  name: "perfectinfoItem",
  props: {
    // 填写完成情况 0 未上传  1 部分上传  2 完成上传
    carryType: {
      type: Number,
      default: 0
    },
    // 是否必填
    isMust: {
      type: Boolean,
      default: false
    },
    // 描述
    txt: {
      type: String,
      required: true
    },
    // carryType 0 时的 展现文字
    carryTypeN: {
      type: String,
      default: "请上传"
    },
    // carryType 1 时的 展现文字
    carryTypeP: {
      type: String,
      default: "待完善"
    },
    // carryType 2 时的 展现文字
    carryTypeY: {
      type: String,
      default: "已上传"
    },
    // 跳转的地址 类型
    routerName: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  watch: {},
  created() {},
  methods: {
    handleClickItem() {
      this.$router.replace({ name: this.routerName });
    }
  }
};
</script>
<style lang="scss" scoped>
.perfect-info-item {
  height: 100px;
  width: 100%;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #ccc;
}
.left,
.right {
  white-space: nowrap;
  display: flex;
  font-size: 30px;
  font-weight: 400;
  color: rgba(34, 41, 67, 1);
}
.left {
  .txt {
    padding-right: 20px;
  }
  .tag {
    transform: scale(0.8);
  }
}
.right {
  color: #4b97f7;
  .txt {
    // color: rgb(245, 112, 112);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
