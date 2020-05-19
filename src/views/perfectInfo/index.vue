<template>
  <div class="container">
    <header-com title="完善车辆信息" routerName="carList"></header-com>
    <div class="center">
      <div class="info-title">
        资料照片
      </div>
      <info-item
        routerName="cardId"
        :carryType="carrType.cardId"
        txt="身份证"
        :isMust="true"
      ></info-item>
      <info-item
        routerName="cardDrive"
        :carryType="carrType.cardDrive"
        txt="行驶证"
        :isMust="true"
      ></info-item>
      <info-item
        routerName="insurance"
        :carryType="carrType.insurance"
        txt="交强险或商业险"
      ></info-item>
      <div class="info-title">
        车辆信息
      </div>
      <info-item
        routerName="carInfo"
        :carryType="carrType.carInfo"
        txt="车辆基本信息"
        :isMust="true"
      ></info-item>
      <info-item
        routerName="carImgs"
        :carryType="carrType.carImgs"
        :carryTypeP="`待完善(${imgsLength}/6)`"
        txt="车辆照片"
      ></info-item>
      <info-item
        routerName="carDesc"
        :carryType="carrType.carDesc"
        carryTypeY="已填写"
        txt="车辆描述"
        carryTypeN="请填写"
      ></info-item>
    </div>
    <van-overlay :show="mainLoading">
      <loading></loading>
    </van-overlay>
  </div>
</template>
<script>
import headerCom from "@/components/headerCom";
import infoItem from "./components/infoItem";
import loading from "@/components/loading";
import { getCarByIdApi } from "@/api/user";
import { Toast } from "vant";
import { mapMutations, mapState } from "vuex";
export default {
  name: "perfectInfo",
  components: { headerCom, infoItem, loading },
  data() {
    return {
      mainLoading: false,
      // 填写完成情况 0 未上传  1 部分上传  2 完成上传
      carrType: {
        cardId: 0,
        cardDrive: 0,
        insurance: 0,
        carImgs: 0,
        carInfo: 0,
        carDesc: 0
      },
      imgsLength: 0
    };
  },
  computed: {
    ...mapState(["carId"])
  },
  created() {
    this.init();
  },
  activated() {
    this.init();
  },

  methods: {
    ...mapMutations([
      "SET_CARD_ID",
      "SET_CARD_DRIVER",
      "SET_INSURANCE",
      "SET_CAR_IMGS",
      "SET_CAR_DESC",
      "SET_CAR_INFO"
    ]),
    init() {
      this.query();
    },
    async query() {
      try {
        this.mainLoading = true;
        let fd = new FormData();
        fd.append("carId", this.carId);
        let res = await getCarByIdApi(fd);
        if (res.data.header.code == 200) {
          this.formateData(res.data.body);
        } else {
          throw "code not 200";
        }
      } catch (error) {
        Toast.fail("未知错误");
        this.$router.replace({ name: "carList" });
      } finally {
        this.mainLoading = false;
      }
    },
    formateData(data) {
      this.cardIdData(data);
      this.insuranceData(data);
      this.cardDriverData(data);
      this.carImgsData(data);
      this.carDescData(data);
      this.carInfoData(data);
    },
    // 身份证信息
    cardIdData(data) {
      let res = {};
      // 图片
      res.idcard = data.idcard || "";
      res.ownerName = data.ownerName || "";
      res.idcardNum = data.idcardNum || "";
      let flag = 0;
      let length = 0;
      // 字段总数  填写的字段总数
      for (let item in res) {
        if (res[item]) {
          flag++;
        }
        length++;
      }
      if (flag == length) {
        this.carrType.cardId = 2;
      }
      if (flag == 0) {
        this.carrType.cardId = 0;
      }
      if (flag < length && flag > 0) {
        this.carrType.cardId = 1;
      }
      this.SET_CARD_ID(res);
    },
    // 行驶证
    cardDriverData(data) {
      let res = [];
      if (data.carLicense) {
        res = data.carLicense.split(",");
      }
      let length = 0;
      res.forEach(item => {
        if (item) {
          length++;
        }
      });
      this.carrType.cardDrive = length;
      this.SET_CARD_DRIVER(res);
    },

    // 交强险或商业险
    insuranceData(data) {
      let res = [];
      if (data.insurance) {
        res = data.insurance.split(",");
      }
      // 存在的个数
      let length = 0;
      res.forEach(item => {
        if (item) {
          length++;
        }
      });

      this.carrType.insurance = length;
      this.SET_INSURANCE(res);
    },
    // 车辆图片
    carImgsData(data) {
      let res = [];
      if (data.carPhoto) {
        res = data.carPhoto.split(",");
      }
      let length = 0;
      res.forEach(item => {
        if (item) {
          length++;
        }
      });
      if (length == 0) {
        this.carrType.carImgs = 0;
      }
      if (length > 0 && length < 6) {
        this.carrType.carImgs = 1;
      }
      if (length >= 6) {
        this.carrType.carImgs = 2;
      }
      this.imgsLength = length;
      this.SET_CAR_IMGS(res);
    },
    // 车辆描述
    carDescData(data) {
      let res = data.carDesc || "";
      if (res) {
        this.carrType.carDesc = 2;
      } else {
        this.carrType.carDesc = 0;
      }
      this.SET_CAR_DESC(res);
    },
    carInfoData(data) {
      let res = {};
      // 车牌
      res.plateNumber = data.plateNumber || "";
      res.brand = data.brand || "";
      res.model = data.model || "";
      // 预期押金
      res.wantRent = data.wantRent || 0;
      //颜色
      res.color = data.color || "";
      // 发动机类型
      res.engineType = data.engineType || "";
      // 排量
      res.output = data.output || "";
      // 变速箱
      res.gearbox = data.gearbox || "";
      // 座位数
      res.seatNum = data.seatNum || "";
      // 是否敞篷
      res.isRoadster = data.isRoadster || 0; // 0否  1 是
      res.city = data.city || "";
      let flag = 0;
      let length = 0;
      // 字段总数  填写的字段总数
      for (let item in res) {
        if (res[item] || res[item] == 0) {
          flag++;
        }
        length++;
      }
      if (flag == length) {
        this.carrType.carInfo = 2;
      }
      if (flag == 0) {
        this.carrType.carInfo = 0;
      }
      if (flag < length && flag > 0) {
        this.carrType.carInfo = 1;
      }
      this.SET_CAR_INFO(res);
    }
  }
};
</script>
<style lang="scss" scoped>
.info-title {
  width: 100%;
  height: 80px;
  background: rgba(211, 212, 217, 1);
  font-size: 30px;
  font-weight: 400;
  color: rgba(84, 85, 87, 1);
  padding: 0 32px;
  line-height: 80px;
  opacity: 0.7;
}
</style>
