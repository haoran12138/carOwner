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
        :info="item.info"
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
import { updateCarByIdApi } from "@/api/user";
import { mapState } from "vuex";
import { Toast } from "vant";
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
          name: "drive1"
        },
        {
          imgUrl: "",
          guideUrl: "http://image.jufengchaopao.com/JPIC1589536626177880.jpeg",
          title: "行驶证副页(背面)",
          desc: "未上传",
          width: "40vw",
          height: "60vw",
          name: "drive2"
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
  computed: {
    ...mapState(["cardDriver", "carId"])
  },
  created() {
    // 没有 carid 返回carList
    if (!this.carId) {
      this.$router.replace({ name: "carList" });
    }
    this.init();
  },
  methods: {
    init() {
      let cardDrive = this.cardDriver;
      cardDrive.forEach((item, index) => {
        if (item) {
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
      this.info.keyName = item.name;
      this.info.keyIndex = index;
      this.showGuide = true;
    },
    getImgUrl({ url, info }) {
      this.showImgList[info.keyIndex]["imgUrl"] = url;
      this.showImgList[info.keyIndex]["desc"] = "重新上传";
      this.showGuide = false;
      this.updData();
    },
    async updData() {
      try {
        let fd = new FormData();
        let carLicenseList = [];
        this.showImgList.forEach(item => {
          carLicenseList.push(item.imgUrl);
        });
        fd.append("id", this.carId);
        fd.append("carLicense", carLicenseList.join(","));
        Toast.loading("上传中");

        let res = await updateCarByIdApi(fd);
        if (res === false) {
          return;
        }
        if (res.data.header.code == 200) {
          Toast.clear();
        } else {
          throw "code not 200";
        }
      } catch (error) {
        Toast.fail("未知错误");
      }
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
