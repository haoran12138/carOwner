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
        type="text"
        input-align="right"
        v-model="info.carName"
        label="车辆联系人"
        placeholder="请输入"
        right-icon="0"
        @input="changeCarName"
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
        :value="info.carInfo.brand + info.carInfo.model"
        label="品牌类型"
        right-icon="arrow"
        placeholder="请输入"
        :readonly="true"
        @click="openBrand"
      >
      </van-field>
      <van-field
        :border="false"
        type="text"
        input-align="right"
        v-model="info.city"
        label="交车城市"
        right-icon="arrow"
        placeholder="请输入"
        :readonly="true"
        @click="openCity"
      >
      </van-field>
      <van-button
        class="submit-btn"
        :class="{ disabled: !isSubmit }"
        color="#E63D33"
        block
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
  </div>
</template>
<script>
import area from "@/assets/js/area.js";
import homeTownList from "@/assets/js/homeTownList.js";
import selectBrand from "@/components/selectBrand";
import headerCom from "@/components/headerCom";
import { Toast } from "vant";
let nameReg = /^[\u2E80-\u9FFF]{2,10}$/;
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
        carName: "",
        hometown: "沪",
        plate: "",
        carInfo: { brand: "", model: "" },
        city: ""
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
        isCarName: false,
        isPlate: false,
        isBrand: false,
        isCity: false
      }
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
    "info.brand": function(val) {
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
        carName: "",
        hometown: "沪",
        plate: "",
        carInfo: { brand: "", model: "" },
        city: ""
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
        isCarName: false,
        isPlate: false,
        isBrand: false,
        isCity: false
      }
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
    changeRealName(value) {
      this.isRuls.isRealName = nameReg.test(value);
    },
    changeCarName(value) {
      this.isRuls.isCarName = nameReg.test(value);
    },
    changePlate(value) {
      this.isRuls.isPlate = plateReg.test(value);
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
      let { isRealName, isCarName, isPlate, isBrand, isCity } = this.isRuls;
      if (!(isRealName && isCarName)) {
        Toast.fail("姓名格式不合法");
        return;
      }
      if (!isPlate) {
        Toast.fail("输入车牌格式不合法");
        return;
      }
      if (!isBrand) {
        Toast.fail("请选中车型");
        return;
      }
      if (!isCity) {
        Toast.fail("请选中城市");
        return;
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
