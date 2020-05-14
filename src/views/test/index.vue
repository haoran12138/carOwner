<template>
  <div>
    <div id="demo">
      <vue-cropper
        ref="cropper"
        :viewMode="1"
        :src="imgSrc"
        :cropBoxResizable="false"
        :cropBoxMovable="false"
        :scalable="false"
        :zoomable="false"
        dragMode="move"
        :aspectRatio="1"
        :autoCropArea="1"
        alt="Source Image"
      >
      </vue-cropper>
    </div>
    <div class="bottom">
      <div @click="handleCancel">取消</div>
      <div @click="handleConfirm">确认</div>
    </div>
    <img :src="img" alt="" />
  </div>
</template>

<script>
// https://github.com/fengyuanchen/cropperjs#cropperjs
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
export default {
  components: { VueCropper },
  data() {
    return {
      imgSrc: "http://image.jufengchaopao.com/JPIC1589356070722875.jpeg",
      // imgSrc: "http://image.jufengchaopao.com/JPIC1589356818497114.jpeg"
      img: ""
    };
  },
  created() {},
  methods: {
    handleConfirm() {
      let a = this.$refs.cropper.getCroppedCanvas().toDataURL("image/jpeg");
      this.img = a;
    },
    handleCancel() {
      // this.$router.to(-1)
    }
  }
};
</script>
<style lang="scss" scoped>
#demo {
  height: 100vh;
  display: flex;
  align-items: center;
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
