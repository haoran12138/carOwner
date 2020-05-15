<template>
  <div class="container">
    <van-nav-bar title="行驶证" left-arrow @click-left="onClickLeft" />
    <div
      class="item"
      @click="handleShowGuide(item, index)"
      v-for="(item, index) in showImgList"
      :key="index"
    >
      <show-upload
        :imgUrl="item.imgUrl"
        :guideUrl="item.guideUrl"
        :title="item.title"
        :desc="item.desc"
        :width="item.width"
        :height="item.height"
      ></show-upload>
    </div>
    <van-popup
      closeable
      close-icon-position="top-left"
      position="bottom"
      v-model="showGuide"
    >
      <guide-photo
        :guideUrl="guideUrl"
        :aspectRatio="1"
        @getImgUrl="getImgUrl"
        :info="info"
      ></guide-photo>
    </van-popup>
  </div>
</template>
<script>
import showUpload from "./components/showUpload";
import guidePhoto from "./components/guidePhoto";
export default {
  name: "cardDrive",
  components: { showUpload, guidePhoto },
  data() {
    return {
      showImgList: [
        {
          imgUrl: "",
          guideUrl: "http://image.jufengchaopao.com/JPIC1589529982866494.jpeg",
          title: "行驶证正页(正面)",
          desc: "未上传",
          width: "40vw",
          height: "60vw",
          name: "up"
        },
        {
          imgUrl: "",
          guideUrl: "http://image.jufengchaopao.com/JPIC1589536626177880.jpeg",
          title: "行驶证副页(背面)",
          desc: "未上传",
          width: "40vw",
          height: "60vw",
          name: "down"
        }
      ],
      info: {
        keyName: "",
        keyIndex: null
      },
      guideUrl: "",
      showGuide: false
    };
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.replace({ name: "perfectInfo" });
    },
    handleShowGuide(item, index) {
      this.guideUrl = item.guideUrl;
      this.info.keyName = item.name;
      this.info.keyIndex = index;
      this.showGuide = true;
    },
    getImgUrl({ url, info }) {
      this.showImgList[info.keyIndex]["imgUrl"] = url;
      console.log(url, info);
      this.showGuide = false;
      let fd = new FormData();
    }
  }
};
</script>
<style lang="scss" scoped>
.item {
  margin-top: 32px;
  padding: 0 32px;
}
</style>
