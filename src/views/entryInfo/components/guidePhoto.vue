<template>
  <div class="container guidePhoto">
    <div class="center">
      <img :src="guideUrl" alt="" />
    </div>
    <div class="btn">
      <van-uploader
        ref="upload"
        :max-count="1"
        :deletable="false"
        :after-read="afterRead"
      >
        <van-button icon="photo" block type="primary">上传文件</van-button>
      </van-uploader>
    </div>
    <van-popup position="bottom" style="width:100%" v-model="showCropper">
      <i-cropper
        v-if="showCropper"
        :aspectRatio="aspectRatio"
        :oriImg="oriImg"
        @cloesdCropper="cloesdCropper"
        @confirmCropper="confirmCropper"
      ></i-cropper>
    </van-popup>
  </div>
</template>
<script>
// 拍照引导页

import { uploadApi } from "@/api/sys";
import iCropper from "@/components/iCropper";
import { Toast } from "vant";
export default {
  name: "guidePhoto",
  props: {
    guideUrl: {
      type: String,
      required: true
    },
    info: {
      type: Object,
      required: true
    },
    // 切割比例
    aspectRatio: {
      type: Number,
      required: true
    }
  },
  components: { iCropper },
  data() {
    return {
      fileList: [],
      showCropper: false,
      cropperImg: "",
      oriImg: ""
    };
  },
  created() {},
  methods: {
    afterRead(file) {
      this.showCropper = true;
      this.oriImg = file.content;
    },
    cloesdCropper() {
      this.showCropper = false;
    },
    confirmCropper(file) {
      this.showCropper = false;
      this.upload(file);
    },
    async upload(file) {
      Toast.loading({
        duration: 0,
        message: "处理中..."
      });
      let fd = new FormData();
      fd.append("uploadFile", file);

      try {
        let res = await uploadApi(fd);
        if (res.code == 200) {
          this.$emit("getImgUrl", {
            url: res.data[0].url,
            info: this.info
          });
          Toast.clear();
        } else {
          throw "code not 200";
        }
      } catch (error) {
        Toast.fail("网络错误 请稍后重试");
      }
    }
  }
};
</script>
<style lang="scss">
.guidePhoto {
  .van-uploader {
    display: block;
  }
  .van-uploader__input-wrapper {
    width: 100%;
  }
}
</style>
<style lang="scss" scoped>
.container {
  height: 100vh;
  padding: 0 30px;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  position: relative;
}
.center {
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}
.btn {
  height: 15vh;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
