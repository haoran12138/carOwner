<template>
  <div class="container">
    <header-com title="填写基础信息" routerName="carList"></header-com>

    <!--  right-icon="0"   错误图标不会显示 用于占位 -->
    <div class="center mform">
      <van-field
        :border="false"
        type="text"
        input-align="right"
        v-model="info.realName"
        label="真实姓名"
        placeholder="请输入"
        right-icon="0"
        @input="changeRealName"
      >
      </van-field>
      <van-field
        :border="false"
        type="tel"
        input-align="right"
        v-model="info.carTel"
        label="车辆联系人电话"
        placeholder="请输入"
        right-icon="0"
        @input="changeCarTel"
      >
      </van-field>
      <van-field
        :border="false"
        type="text"
        input-align="right"
        :value="(info.carInfo.brand + ' ' + info.carInfo.model).trim()"
        label="品牌车型"
        right-icon="arrow"
        placeholder="请选择"
        :readonly="true"
        @click="openBrand"
      >
      </van-field>
      <van-field
        class="plate"
        :border="false"
        type="text"
        input-align="right"
        v-model="info.plate"
        label="车牌号"
        placeholder="请输入"
        right-icon="0"
        @input="changePlate"
      >
        <template class="hometown" #button>
          <div @click="openHomeTown" class="hometown">
            {{ info.hometown }}
          </div>
        </template>
      </van-field>
      <van-field
        :border="false"
        type="text"
        input-align="right"
        v-model="info.useType"
        label="车辆用途"
        right-icon="arrow"
        placeholder="请选择"
        :readonly="true"
        @click="openUseType"
      >
      </van-field>

      <van-field
        :border="false"
        type="text"
        input-align="right"
        v-model="info.city"
        label="交车城市"
        right-icon="arrow"
        placeholder="请选择"
        :readonly="true"
        @click="openCity"
      >
      </van-field>
      <van-button
        class="submit-btn"
        :class="{ disabled: !isSubmit }"
        color="#E63D33"
        block
        :disabled="submitLoading"
        @click="handleSubmit"
        >提交</van-button
      >
    </div>
    <!-- 城市选择 -->
    <van-popup
      :safe-area-inset-bottom="true"
      v-model="showChangeCity"
      round
      position="bottom"
    >
      <van-area
        @cancel="handleCancelCity"
        @confirm="handleConfirmCity"
        title="交车城市"
        :area-list="areaList"
        :columns-num="2"
      />
    </van-popup>
    <!-- 车牌省份选择 -->
    <van-popup
      :safe-area-inset-bottom="true"
      v-model="showChangeHomeTown"
      position="bottom"
    >
      <div class="home-town-container">
        <div class="title">
          <div class="confirm" @click="handleConfirmHomeTown">完成</div>
        </div>
        <div class="main">
          <div
            class="item"
            :class="{ hover: index == homeTownIndex }"
            v-for="(item, index) in homeTownList"
            :key="index"
            @click="handleChangeHomeTown(index)"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 车型品牌 -->
    <van-popup
      :close-on-popstate="true"
      :safe-area-inset-bottom="true"
      v-model="showChangeBrand"
      position="bottom"
      :style="{ height: '100%' }"
    >
      <select-brand
        v-model="info.carInfo"
        @closed="closeSelectBrand"
      ></select-brand>
    </van-popup>
    <!-- 车辆用途 -->
    <van-action-sheet
      :safe-area-inset-bottom="true"
      v-model="showChangeUserType"
      :actions="userTypeList"
      @select="handleSelectUserType"
    />
  </div>
</template>
<script>
import area from "@/assets/js/area.js";
import homeTownList from "@/assets/js/homeTownList.js";
import selectBrand from "@/components/selectBrand";
import headerCom from "@/components/headerCom";
import { addUserCarApi } from "@/api/user";
import { Toast } from "vant";
let nameReg = /^[\u2E80-\u9FFF]{2,10}$/;
let telReg = /^1[23456789]\d{9}$/;
let plateReg = /^([ABCDEFGHJKLMNPQRSTUVWXY][1-9DF][1-9ABCDEFGHJKLMNPQRSTUVWXYZ]\d{3}[1-9DF]|[ABCDEFGHJKLMNPQRSTUVWXY][\dABCDEFGHJKLNMxPQRSTUVWXYZ]{5})$/;
export default {
  name: "basicInfo",
  components: { selectBrand, headerCom },
  data() {
    return {
      info: {
        // 用户姓名
        realName: "",
        // 车辆联系人
        carTel: "",
        hometown: "沪",
        plate: "",
        carInfo: { brand: "", model: "" },
        city: "",
        useType: ""
      },
      showChangeCity: false,
      showChangeHomeTown: false,
      showChangeBrand: false,
      showChangeUserType: false,
      // 城市数据
      areaList: null,
      // 车牌籍贯数据
      homeTownList: null,
      // 索引
      homeTownIndex: 1,

      isRuls: {
        isRealName: false,
        isCarTel: false,
        isPlate: false,
        isBrand: false,
        isCity: false,
        isUseType: false
      },
      userTypeList: [
        { name: "自驾租赁", color: "#000" },
        { name: "婚庆租赁", color: "#000" },
        { name: "全部业务", color: "#000" }
      ],
      submitLoading: false
    };
  },
  computed: {
    isSubmit: function() {
      let res = true;
      for (let item in this.isRuls) {
        if (!this.isRuls[item]) {
          res = false;
          break;
        }
      }
      return res;
    }
  },
  watch: {
    "info.carInfo.brand": function(val) {
      if (val) {
        this.isRuls.isBrand = true;
      } else {
        this.isRuls.isBrand = false;
      }
    }
  },
  activated() {
    let data = {
      info: {
        // 用户姓名
        realName: "",
        // 车辆联系人
        carTel: "",
        hometown: "沪",
        plate: "",
        carInfo: { brand: "", model: "" },
        city: "",
        userType: ""
      },
      showChangeCity: false,
      showChangeHomeTown: false,
      showChangeBrand: false,
      // 城市数据
      areaList: null,
      // 车牌籍贯数据
      homeTownList: null,
      // 索引
      homeTownIndex: 1,

      isRuls: {
        isRealName: false,
        isCarTel: false,
        isPlate: false,
        isBrand: false,
        isCity: false,
        isUseType: false
      },
      userTypeList: [
        { name: "自驾租赁", color: "#000" },
        { name: "婚庆租赁", color: "#000" },
        { name: "全部业务", color: "#000" }
      ]
    };
    Object.assign(this, data);
    this.init();
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.areaList = area;
      this.homeTownList = homeTownList;
    },
    // 打开选择车辆品牌
    openBrand() {
      this.showChangeBrand = true;
    },
    // 打开选择车牌籍贯
    openHomeTown() {
      this.showChangeHomeTown = true;
    },
    // 打开选择交车城市
    openCity() {
      this.showChangeCity = true;
    },
    // 打开选择车辆用途
    openUseType() {
      this.showChangeUserType = true;
    },
    changeRealName(value) {
      this.isRuls.isRealName = nameReg.test(value);
    },
    changeCarTel(value) {
      this.isRuls.isCarTel = telReg.test(value);
    },
    changePlate(value) {
      this.isRuls.isPlate = plateReg.test(value.toUpperCase());
    },
    handleSelectUserType(item, index) {
      let { userTypeList } = this;
      userTypeList.forEach((a, b) => {
        if (b == index) {
          a.color = "#e63d33";
        } else {
          a.color = "#000000";
        }
      });
      this.showChangeUserType = false;
      this.info.useType = item.name;
      this.isRuls.isUseType = true;
    },
    handleCancelCity() {
      this.showChangeCity = false;
    },
    handleConfirmCity(areaList) {
      this.showChangeCity = false;
      if (areaList.length == 2) {
        this.info.city = areaList[1].name;
        this.isRuls.isCity = true;
      }
    },
    handleChangeHomeTown(index) {
      this.homeTownIndex = index;
    },
    handleConfirmHomeTown() {
      this.showChangeHomeTown = false;
      this.info.hometown = this.homeTownList[this.homeTownIndex];
    },

    handleSubmit() {
      let {
        isRealName,
        isCarTel,
        isPlate,
        isBrand,
        isCity,
        isUseType
      } = this.isRuls;
      if (!isRealName) {
        Toast.fail("姓名格式不合法");
        return;
      }
      if (!isCarTel) {
        Toast.fail("手机号格式不合法");
        return;
      }

      if (!isBrand) {
        Toast.fail("请选择车型");
        return;
      }
      if (!isPlate) {
        Toast.fail("输入车牌格式不合法");
        return;
      }
      if (!isUseType) {
        Toast.fail("请选择车辆用途");
        return;
      }
      if (!isCity) {
        Toast.fail("请选择交车城市");
        return;
      }
      this.handleFormData();
    },
    async handleFormData() {
      this.submitLoading = true;
      Toast.loading({
        duration: 0,
        message: "添加中...",
        forbidClick: true
      });
      let {
        realName,
        carTel,
        hometown,
        plate,
        carInfo,
        city,
        useType
      } = this.info;

      let fd = new FormData();
      fd.append("name", realName);
      fd.append("carContactsTel", carTel);
      fd.append("brand", carInfo.brand);
      fd.append("model", carInfo.model);
      fd.append("plateNumber", hometown + plate);
      fd.append("city", city);

      //  "自驾租赁", color: "#000" },
      //         { name: "婚庆租赁", color: "#000" },
      //         { name: "全部业务
      switch (useType) {
        case "自驾租赁":
          fd.append("carType", "1");
          break;
        case "婚庆租赁":
          fd.append("carType", "2");
          break;
        case "全部业务":
          fd.append("carType", "3");
          break;
        default:
          this.submitLoading = false;
          console.log("错误");
          Toast.fail("错误 请刷新重试");
          return false;
      }

      let res = await addUserCarApi(fd);
      try {
        if (res.data.header.code == 200) {
          Toast.success("添加成功");
          this.$router.replace({ name: "carList" });
        } else {
          Toast.fail(res.data.header.desc);
        }
      } catch (error) {
        Toast.fail("数据错误");
      } finally {
        this.submitLoading = false;
      }
    },
    closeSelectBrand(carInfo) {
      this.showChangeBrand = false;
    }
  }
};
</script>
<style lang="scss">
.plate .van-field__button {
  position: absolute;
  right: 250px;
  .hometown {
    width: 60px;
    height: 55px;
    border: 1px solid rgb(160, 160, 160);
    color: #000000;
    line-height: 55px;
    text-align: center;
  }
  .hometown::after {
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border: 8px solid #e63d33;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    transform: rotate(45deg);
  }
}
</style>
<style lang="scss" scoped>
.container {
  overflow: hidden;
  min-height: 100vh;
}
.center {
  padding: 0 40px;
}
.submit-btn {
  margin-top: 100px;
  &.disabled {
    opacity: 0.5;
  }
}

.home-town-container {
  overflow: hidden;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  .title {
    border-bottom: 1px solid #ccc;
    height: 100px;
    line-height: 100px;
    .confirm {
      width: 160px;
      text-align: center;
      float: right;
      color: rgb(39, 114, 253);
    }
  }
  .main {
    .item {
      display: inline-block;
      width: 12.5vw;
      height: 12.5vw;
      text-align: center;
      line-height: 12.5vw;
      border: 1px solid #ccc;
      border-right: 0px;
      border-top: 0px;
    }
    .item.hover {
      background: rgb(39, 114, 253);
      color: #fff;
    }
  }
}
</style>
