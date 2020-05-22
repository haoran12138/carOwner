<template>
  <div class="container">
    <van-nav-bar
      :title="'车辆照片(' + imgNum + '/6)'"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="center">
      <div
        v-for="(item, index) in showImgList"
        :key="index"
        class="item"
        @click="handleShowGuide(item, index)"
      >
        <show-upload
          :img-url="item.imgUrl"
          :def-url="item.defUrl"
          :title="item.title"
          :desc="item.desc"
          :width="width"
          :height="height"
        ></show-upload>
      </div>
    </div>
    <van-popup
      v-model="showGuide"
      closeable
      close-icon-position="top-left"
      position="bottom"
    >
      <guide-photo
        :guide-url="guideUrl"
        :aspect-ratio="2"
        :info="info"
        @getImgUrl="getImgUrl"
      ></guide-photo>
    </van-popup>
  </div>
</template>
<script>
import showUpload from "./components/showUpload";
import guidePhoto from "./components/guidePhoto";
import { updateCarByIdApi } from "@/api/user";
import { mapState } from "vuex";
import { Toast } from "vant";
export default {
  name: "CardDrive",
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
  computed: {
    ...mapState(["carImgs", "carId"])
  },
  created() {
    if (!this.carId) {
      this.$router.replace({ name: "carList" });
    }
    this.init();
  },
  methods: {
    init() {
      let carImgs = this.carImgs;
      this.imgNum = 0;
      carImgs.forEach((item, index) => {
        if (item) {
          this.imgNum++;
          this.showImgList[index]["imgUrl"] = item;
          this.showImgList[index]["desc"] = "重新上传";
        }
      });
    },
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
      this.showImgList[info.keyIndex]["desc"] = "重新上传";
      this.showGuide = false;
      this.updImgNum();
      this.updData();
    },
    async updData() {
      try {
        let fd = new FormData();
        let carPhotoList = [];
        this.showImgList.forEach(item => {
          carPhotoList.push(item.imgUrl);
        });
        fd.append("id", this.carId);
        // 取正侧面 做缩略图
        fd.append("carThumbPic", carPhotoList[0]);
        fd.append("carPhoto", carPhotoList.join(","));
        Toast.loading("上传中");
        let res = await updateCarByIdApi(fd);
        if (res === false) {
          return;
        }
        if (res.data.header.code != 200) {
          throw "code not 200";
        }
      } catch (error) {
        Toast.fail("未知错误");
      }
    },
    // 计算上传数量
    updImgNum() {
      let num = 0;
      this.showImgList.forEach(item => {
        if (item.imgUrl) {
          num++;
        }
      });
      this.imgNum = num;
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
