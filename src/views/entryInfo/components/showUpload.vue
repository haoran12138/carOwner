<template>
  <div class="show-upload" @click="showGuide = true">
    <van-image
      fit="cover"
      :width="width"
      :height="height"
      :src="imgUrl || defUrl"
      @click.native="handleShowImg"
    >
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
    <div class="txt">
      <div class="title">{{ title }}</div>
      <div v-if="desc == '未上传'" class="desc">{{ desc }}</div>
      <div v-else class="isdesc">{{ desc }}</div>
      <div class=""></div>
    </div>
  </div>
</template>
<script>
import { ImagePreview } from "vant";
export default {
  name: "ShowUploadDrive",
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    // 默认图片 imgUrl 不存在时展示用
    defUrl: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
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
      color: rgb(190, 190, 190);
      margin-top: 30px;
    }
    .isdesc {
      margin-top: 30px;
      width: 140px;
      color: #777777;
      border-radius: 10px;
      border: 2px solid #bbbbbb;
      text-align: center;
      height: 45px;
      font-size: 26px;
      line-height: 45px;
    }
  }
}
</style>
