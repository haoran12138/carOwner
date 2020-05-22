<template>
  <div class="container">
    <van-nav-bar title="交强险或商业险" left-arrow @click-left="onClickLeft" />
    <div
      v-for="(item, index) in showImgList"
      :key="index"
      class="item"
      @click="handleShowGuide(item, index)"
    >
      <show-upload
        :img-url="item.imgUrl"
        :title="item.title"
        :desc="item.desc"
        :width="item.width"
        :height="item.height"
      ></show-upload>
    </div>
    <van-popup
      v-model="showGuide"
      closeable
      close-icon-position="top-left"
      position="bottom"
    >
      <guide-photo
        :guide-url="guideUrl"
        :aspect-ratio="1"
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
  name: "Insurance",
  components: { showUpload, guidePhoto },
  data() {
    return {
      showImgList: [
        {
          imgUrl: "",
          guideUrl: "http://image.jufengchaopao.com/JPIC1589535020482341.jpeg",
          title: "交强险(正面)",
          desc: "未上传",
          width: "40vw",
          height: "32vw",
          name: "up"
        },
        {
          imgUrl: "",
          guideUrl: "http://image.jufengchaopao.com/JPIC1589535054973929.jpeg",
          title: "商业险",
          desc: "未上传",
          width: "40vw",
          height: "32vw",
          name: "down"
        }
      ],
      info: {
        keyNname: null,
        keyIndex: null
      },
      guideUrl: "",
      showGuide: false
    };
  },
  computed: {
    ...mapState(["insurance", "carId"])
  },
  created() {
    if (!this.carId) {
      this.$router.replace({ name: "carList" });
    }
    this.init();
  },
  methods: {
    init() {
      let insurance = this.insurance;
      insurance.forEach((item, index) => {
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
      this.info.keyNname = item.name;
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
        let list = [];
        this.showImgList.forEach(item => {
          list.push(item.imgUrl);
        });
        fd.append("id", this.carId);
        fd.append("insurance", list.join(","));
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
