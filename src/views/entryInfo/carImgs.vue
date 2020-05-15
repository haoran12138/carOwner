<template>
  <div class="container">
    <van-nav-bar
      :title="'车辆照片(' + imgNum + '/6)'"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="center">
      <div
        class="item"
        @click="handleShowGuide(item, index)"
        v-for="(item, index) in showImgList"
        :key="index"
      >
        <show-upload
          :imgUrl="item.imgUrl"
          :defUrl="item.defUrl"
          :guideUrl="item.guideUrl"
          :title="item.title"
          :desc="item.desc"
          :width="width"
          :height="height"
        ></show-upload>
      </div>
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
      width: "55vw",
      height: "30vw",
      showImgList: [
        {
          imgUrl: "",
          defUrl: "http://image.jufengchaopao.com/JPIC15895348850891403.png",
          guideUrl: "http://image.jufengchaopao.com/JPIC15895352682808345.png",
          title: "正侧面 45度",
          desc: "未上传",

          name: "up"
        },
        {
          imgUrl: "",
          defUrl: "http://image.jufengchaopao.com/JPIC15895353509154407.png",
          guideUrl: "http://image.jufengchaopao.com/JPIC15895354171367341.png",
          title: "车身照",
          desc: "未上传",

          name: "up"
        },

        {
          imgUrl: "",
          defUrl: "http://image.jufengchaopao.com/JPIC15895354933414177.png",
          guideUrl: "http://image.jufengchaopao.com/JPIC15895355160733981.png",
          title: "车头照",
          desc: "未上传",

          name: "up"
        },
        {
          imgUrl: "",
          defUrl: "http://image.jufengchaopao.com/JPIC15895355517456019.png",
          guideUrl: "http://image.jufengchaopao.com/JPIC15895374656967702.png",
          title: "车尾照",
          desc: "未上传",

          name: "up"
        },
        {
          imgUrl: "",
          defUrl: "http://image.jufengchaopao.com/JPIC15895356656348067.png",
          guideUrl: "http://image.jufengchaopao.com/JPIC15895357923434839.png",
          title: "中控室",
          desc: "未上传",

          name: "up"
        },
        {
          imgUrl: "",
          defUrl: "http://image.jufengchaopao.com/JPIC15895358518130772.png",
          guideUrl: "http://image.jufengchaopao.com/JPIC15895358822805428.png",
          title: "后座照",
          desc: "未上传",

          name: "up"
        }
      ],
      info: {
        keyNname: null,
        keyIndex: null
      },
      guideUrl: "",
      showGuide: false,
      imgNum: 0
    };
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.replace({ name: "perfectInfo" });
    },
    handleShowGuide(item, index) {
      this.guideUrl = item.guideUrl;
      this.info.keyNname = item.name;
      this.info.keyIndex = index;
      this.showGuide = true;
    },
    getImgUrl({ url, info }) {
      this.showImgList[info.keyIndex]["imgUrl"] = url;
      this.showGuide = false;
      let fd = new FormData();
    }
  }
};
</script>
<style lang="scss" scoped>
.item {
  margin: 28px 0;
  padding: 0 32px;
}
.center {
  margin: 32px 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
