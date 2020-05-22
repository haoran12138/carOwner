<template>
  <div>
    <div id="icropper">
      <vue-cropper
        ref="cropper"
        :view-mode="0"
        drag-mode="move"
        :src="oriImg"
        :rotatable="true"
        :crop-box-resizable="false"
        :crop-box-movable="false"
        :aspect-ratio="aspectRatio"
        :auto-crop-area="1"
        alt="Source Image"
      >
      </vue-cropper>
    </div>
    <div class="bottom">
      <div @click="handleCancel">取消</div>
      <div @click="handleConfirm">确认</div>
    </div>
  </div>
</template>

<script>
// https://github.com/fengyuanchen/cropperjs#cropperjs   原文档  英
// https://gitee.com/eightFlying/cropper-demo            翻译文档

// cloesdCropper
// confirmCropper
import Compressor from "compressorjs";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import { dataURLtoFile } from "@/utils/index";
import { Toast } from "vant";
export default {
  components: { VueCropper },
  props: {
    oriImg: {
      type: String,
      required: true
    },
    aspectRatio: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleConfirm() {
      let self = this;
      Toast.loading({
        duration: 0,
        message: "切割压缩中...",
        forbidClick: true
      });
      let dataU = this.$refs.cropper.getCroppedCanvas().toDataURL("image/jpeg");
      let cropperFile = dataURLtoFile(dataU);
      // 计算压缩比例
      let qua = Math.floor(((1.5 * 1024 * 1024) / cropperFile.size) * 10);
      qua = qua > 8 ? 8 : qua;
      new Compressor(cropperFile, {
        convertSize: 2000000,
        quality: qua / 10,
        async success(result) {
          let f = new window.File([result], "aa.jpeg", {
            type: result.type
          });
          Toast.clear();
          self.$emit("confirmCropper", f);
        },
        error() {
          Toast.fail("压缩错误");
          self.handleCancel();
          // console.log(err.message);
        }
      });
    },
    handleCancel() {
      this.$emit("cloesdCropper");
    }
  }
};
</script>
<style lang="scss" scoped>
#icropper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  background: #313030;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  & > div {
    width: 20vw;
    height: 10vh;
    text-align: center;
    line-height: 10vh;
  }
}
</style>
