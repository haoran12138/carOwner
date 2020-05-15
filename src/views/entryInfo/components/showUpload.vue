<template>
  <div @click="showGuide = true" class="show-upload">
    <van-image
      @click.native="handleShowImg"
      fit="cover"
      :width="width"
      :height="height"
      :src="imgUrl || defUrl"
    >
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
    <div class="txt">
      <div class="title">{{ title }}</div>
      <div class="desc">{{ desc }}</div>
      <div class=""></div>
    </div>
  </div>
</template>
<script>
import { ImagePreview } from "vant";
export default {
  name: "showUploadDrive",
  props: {
    imgUrl: String,
    // imgUrl 不存在时 展示用
    defUrl: {
      type: String,
      default: ""
    },
    //
    guideUrl: String,
    width: String,
    height: String,
    title: String,
    desc: String
  },

  data() {
    return {
      showGuide: false
    };
  },
  created() {},
  methods: {
    handleShowImg(e) {
      if (this.imgUrl) {
        // 有图片 阻止冒泡
        if (e && e.stopPropagation) e.stopPropagation();
        else window.event.cancelBubble = true;

        ImagePreview([this.imgUrl]);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.show-upload {
  display: flex;
  justify-content: flex-start;
  .txt {
    padding: 32px;
    user-select: none;
    white-space: nowrap;
    .title {
      font-size: 32px;
      font-weight: 500;
    }
    .desc {
      color: rgb(221, 221, 221);
      margin-top: 20px;
    }
  }
}
</style>
