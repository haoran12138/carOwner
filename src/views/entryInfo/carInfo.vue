<template>
  <div class="container carInfo">
    <van-nav-bar
      title="车量基本信息"
      left-arrow
      right-text="保存"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="entry-info-desc">
      添加更多车辆配置信息可以帮助租客更好的了解你的车辆详情，提供订单量哦
    </div>
    <!--  right-icon="0"   错误图标不会显示 用于占位 -->
    <div class="center mform">
      <van-field
        v-model="info.plate"
        class="plate"
        :border="false"
        type="text"
        input-align="right"
        label="车牌号"
        placeholder="请输入"
        right-icon="0"
      >
        <template #button class="hometown">
          <div class="hometown" @click="openHomeTown">
            {{ info.hometown }}
          </div>
        </template>
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
        v-model="info.city"
        :border="false"
        type="text"
        input-align="right"
        label="交车城市"
        right-icon="arrow"
        placeholder="请选择"
        :readonly="true"
        @click="openCity"
      >
      </van-field>
      <van-field
        :border="false"
        type="text"
        input-align="right"
        :value="!info.wantRent ? '智能定价' : info.wantRent + ' 元/天'"
        label="意向租金"
        right-icon="0"
        placeholder="请输入"
        :readonly="true"
        @click="openWantRent"
      >
      </van-field>
      <van-field
        v-model="info.color"
        :border="false"
        type="text"
        input-align="right"
        label="颜色"
        right-icon="0"
        placeholder="请输入"
      >
      </van-field>
      <van-field
        :border="false"
        type="text"
        input-align="right"
        :value="info.engineType"
        label="发动机类型"
        right-icon="arrow"
        placeholder="请选择"
        :readonly="true"
        @click="openEngineType"
      >
      </van-field>
      <van-field
        v-model="info.output"
        :border="false"
        type="number"
        input-align="right"
        label="排量"
        placeholder="请输入"
      >
        <template #right-icon>
          <span style="padding:0 4px">L</span>
        </template>
      </van-field>
      <van-field
        v-model="info.seatNum"
        :border="false"
        type="digit"
        input-align="right"
        label="座位数"
        placeholder="请输入"
      >
        <template #right-icon>
          <span style="padding:0 4px">位</span>
        </template>
      </van-field>
      <van-field
        :border="false"
        type="text"
        input-align="right"
        :value="info.gearbox"
        label="变速箱"
        right-icon="arrow"
        placeholder="请选择"
        :readonly="true"
        @click="openGearbox"
      >
      </van-field>
      <van-field
        :border="false"
        type="text"
        input-align="right"
        :value="info.isRoadster == 1 ? '敞篷' : '非敞篷'"
        label="是否敞篷"
        right-icon="arrow"
        placeholder="请选择"
        :readonly="true"
        @click="openRoadster"
      >
      </van-field>
    </div>
    <!-- 交车城市 -->
    <van-popup
      v-model="showChangeCity"
      :safe-area-inset-bottom="true"
      round
      position="bottom"
    >
      <van-area
        title="交车城市"
        :area-list="areaList"
        :columns-num="2"
        @cancel="handleCancelCity"
        @confirm="handleConfirmCity"
      />
    </van-popup>
    <!-- 车牌省份选择 -->
    <van-popup
      v-model="showChangeHomeTown"
      :safe-area-inset-bottom="true"
      position="bottom"
    >
      <home-town v-model="info.hometown" @hidePopup="hidePopup"></home-town>
    </van-popup>
    <!-- 车型品牌 -->
    <van-popup
      v-model="showChangeBrand"
      :close-on-popstate="true"
      :safe-area-inset-bottom="true"
      position="bottom"
      :style="{ height: '100%' }"
    >
      <select-brand
        v-model="info.carInfo"
        @closed="closeSelectBrand"
      ></select-brand>
    </van-popup>
    <!-- 意向租金 -->
    <van-popup
      v-model="showChangeWantRent"
      :safe-area-inset-bottom="true"
      :style="{ height: '35vh' }"
      position="bottom"
      @close="confirmChangeWantRent"
    >
      <div class="wantRent-box">
        <div
          :class="{ hover: wantRentType == 0 }"
          class="left"
          @click="changeRentType(0)"
        >
          <div class="title">由平台智能定价</div>
          <div class="desc">
            选择平台智能定价后,平台将通过大数据分析市场热度,运用人工智能设计合理定价及起租天数,使您的车辆收益最大化！
          </div>
        </div>
        <div
          :class="{ hover: wantRentType != 0 }"
          class="right"
          @click="changeRentType(1)"
        >
          <div class="title">自定义</div>
          <div class="inp">
            <van-field
              v-model="wantRentNum"
              :border="false"
              type="number"
              input-align="right"
              min="1"
            >
            </van-field>
            元/天
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 发动机类型 -->
    <van-action-sheet
      v-model="showEngineType"
      :actions="engineTypeList"
      @select="onSelectEngineType"
    />
    <!-- 变速箱类型 -->
    <van-action-sheet
      v-model="showGearbox"
      :actions="gearboxList"
      @select="onSelectGearbox"
    />
    <!-- 敞篷类型 -->
    <van-action-sheet
      v-model="showRoadster"
      :actions="roadsterList"
      @select="onSelectRoadster"
    />
  </div>
</template>
<script>
import area from "@/assets/js/area.js";
import { updateCarByIdApi } from "@/api/user";
import { mapState } from "vuex";
import { Toast, Dialog } from "vant";
import selectBrand from "@/components/selectBrand";
import homeTown from "@/components/homeTown";
import { isPlateReg } from "@/utils/regTest";
export default {
  name: "CarInfo",
  components: { selectBrand, homeTown },
  data() {
    return {
      info: {
        hometown: "沪",
        plate: "",
        carInfo: { brand: "", model: "" },
        city: "",
        wantRent: 0,
        color: "",
        engineType: "",
        output: "",
        seatNum: "",
        gearbox: "",
        isRoadster: 0 // 0否  1 是
      },
      showChangeCity: false,
      showChangeHomeTown: false,
      showChangeBrand: false,
      showChangeWantRent: false,
      showEngineType: false,
      showGearbox: false,
      showRoadster: false,
      // 城市数据
      areaList: null,
      wantRentType: "",
      wantRentNum: null,
      engineTypeList: [
        { name: "涡轮增压", color: "" },
        { name: "自然吸气", color: "" },
        { name: "电机", color: "" }
      ],
      gearboxList: [
        { name: "自动", color: "" },
        { name: "手动", color: "" },
        { name: "手自一体", color: "" },
        { name: "纯电动", color: "" }
      ],
      roadsterList: [
        { name: "非敞篷", color: "", value: 0 },
        { name: "敞篷", color: "", value: 1 }
      ],
      // 是否有改变 在改回去也算改变
      isChange: false
    };
  },
  computed: {
    ...mapState(["carInfo", "carId"])
  },
  watch: {
    info: {
      handler() {
        this.isChange = true;
      },
      deep: true // 监听这个对象中的每一个属性变化
    }
  },
  created() {
    this.areaList = area;
    this.init();
  },
  mounted() {
    // 初始化改变状态
    setTimeout(() => {
      this.isChange = false;
    }, 500);
  },
  methods: {
    init() {
      if (!this.carId) {
        this.$router.replace({ name: "carList" });
      }

      let {
        plateNumber,
        brand,
        model,
        city,
        wantRent,
        color,
        engineType,
        output,
        seatNum,
        gearbox,
        isRoadster
      } = this.carInfo;
      if (plateNumber) {
        this.info.homeTown = plateNumber[0];
        this.info.plate = plateNumber.slice(1);
      }
      this.info.carInfo.brand = brand;
      this.info.carInfo.model = model;
      this.info.city = city;
      this.info.wantRent = wantRent;
      this.info.color = color;
      this.info.engineType = engineType;
      this.info.output = output;
      this.info.seatNum = seatNum;
      this.info.gearbox = gearbox;
      this.info.isRoadster = isRoadster;
    },
    onClickLeft() {
      let self = this;
      if (this.isChange) {
        Dialog.confirm({
          message: "是否保存后退出"
        })
          .then(() => {
            this.update().then(() => {
              self.$router.replace({ name: "perfectInfo" });
            });
          })
          .catch(() => {
            self.$router.replace({ name: "perfectInfo" });
          });
      } else {
        self.$router.replace({ name: "perfectInfo" });
      }
    },
    onClickRight() {
      this.update();
    },
    // 打开选择车辆品牌
    openBrand() {
      this.showChangeBrand = true;
    },
    closeSelectBrand() {
      this.showChangeBrand = false;
    },
    // 打开选择车牌籍贯
    openHomeTown() {
      this.showChangeHomeTown = true;
    },
    // 打开选择交车城市
    openCity() {
      this.showChangeCity = true;
    },
    handleCancelCity() {
      this.showChangeCity = false;
    },
    handleConfirmCity(areaList) {
      this.showChangeCity = false;
      if (areaList.length == 2) {
        this.info.city = areaList[1].name;
      }
    },
    hidePopup() {
      this.showChangeHomeTown = false;
    },
    // 意向租金
    openWantRent() {
      this.showChangeWantRent = true;
    },
    changeRentType(type) {
      this.wantRentType = type;
    },
    confirmChangeWantRent() {
      let { wantRentNum, wantRentType } = this;
      if (wantRentType == 0) {
        this.info.wantRent = 0;
        this.wantRentNum = 0;
      }
      if (wantRentType != 0 && wantRentNum > 1) {
        this.info.wantRent = wantRentNum;
      } else {
        this.wantRentType = 0;
      }
    },

    // 发动机类型
    openEngineType() {
      this.showEngineType = true;
    },
    onSelectEngineType(data) {
      let { name } = data;
      this.info.engineType = name;
      this.engineTypeList.forEach(item => {
        if (item.name == name) {
          item.color = "#e63d33";
        } else {
          item.color = "";
        }
      });
      this.showEngineType = false;
    },
    // 变速箱
    openGearbox() {
      this.showGearbox = true;
    },
    onSelectGearbox(data) {
      let { name } = data;
      this.info.gearbox = name;
      this.gearboxList.forEach(item => {
        if (item.name == name) {
          item.color = "#e63d33";
        } else {
          item.color = "";
        }
      });
      this.showGearbox = false;
    },
    // 是否敞篷
    openRoadster() {
      this.showRoadster = true;
    },
    onSelectRoadster(data) {
      let { value } = data;
      this.info.isRoadster = value;
      this.roadsterList.forEach(item => {
        if (item.value == value) {
          item.color = "#e63d33";
        } else {
          item.color = "";
        }
      });
      this.showRoadster = false;
    },

    async update() {
      Toast.loading({
        duration: 0,
        message: "更新数据中"
      });
      let info = this.info;
      if (!isPlateReg(info.plate.toUpperCase())) {
        Toast.fail("车牌号不合法");
        return;
      }
      try {
        let fd = new FormData();
        fd.append("id", this.carId);
        fd.append("plateNumber", info.homeTown + info.plate);
        fd.append("brand", info.carInfo.brand);
        fd.append("model", info.carInfo.model);
        fd.append("city", info.city);
        fd.append("wantRent", info.wantRent);
        fd.append("color", info.color);
        fd.append("engineType", info.engineType);
        fd.append("output", info.output);
        fd.append("seatNum", info.seatNum);
        fd.append("gearbox", info.gearbox);
        fd.append("isRoadster", info.isRoadster);

        let res = await updateCarByIdApi(fd);
        if (res === false) {
          return;
        }
        if (res.data.header.code == 200) {
          Toast.success({
            duration: 500,
            message: "更新完成"
          });
          this.isChange = false;
        }
      } catch (error) {
        Toast.fail("更新错误");
      }
    }
  }
};
</script>
<style lang="scss">
.carInfo {
  .van-field__control--right {
    color: rgb(37, 159, 240);
  }
}
</style>
<style lang="scss" scoped>
.wantRent-box {
  padding: 2vh;
  width: 100%;
  height: 100%;
  display: flex;
  background: #fff;
  justify-content: space-around;
  & > div {
    background: #ececec;
    height: 100%;
    width: 45%;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    &.hover {
      background: #383838;
      color: rgb(218, 218, 218);
      box-shadow: 0px 0px 10px 5px #6f6f6f;
    }
    .title {
      line-height: 100px;
      font-weight: 500;
    }
    .desc {
      font-size: 22px;
      opacity: 0.8;
    }
    .inp {
      opacity: 0.8;
      input {
        width: 60%;
      }
    }
  }
}
</style>
