<template>
  <div class="selec-brand">
    <div class="header">
      <div @click="closed" class="closed">
        <van-icon name="arrow-down" />
      </div>
      <div class="title">品牌与车系</div>
    </div>
    <div class="main">
      <div class="left">
        <van-index-bar
          z-index="2"
          highlight-color="#414141"
          :index-list="initialsList"
        >
          <div v-for="(item, index) in initialsList" :key="index">
            <van-index-anchor :index="item" />
            <div
              class="brand-item"
              :class="{ hover: a.brandId == changeBrandId }"
              v-for="(a, b) in brandObj[item]"
              :title="a.brandName"
              :key="b"
              @click="handleClickBrand(a)"
            >
              <img :src="a.brandImg" alt="" />
              <span class="brand-name">{{ a.brandName }}</span>
            </div>
          </div>
        </van-index-bar>
      </div>
      <div class="right">
        <div v-show="!isError">
          <div
            @click="handleClickModel(item.modelName)"
            class="model-item"
            :class="{ hover: changeModel == item.modelName }"
            :key="index"
            v-for="(item, index) in modelList"
          >
            {{ carInfo.brand }} {{ item.modelName }}
          </div>
          <div v-show="modelList.length == 0">暂无车型</div>
        </div>
        <!-- 网络错误 -->
        <div v-if="isError" style="height:100%" @click="handleRefresh">
          <van-empty
            style="height:100%"
            image="network"
            description="点击刷新"
          />
        </div>
      </div>
    </div>
    <van-overlay :show="mainLoading">
      <loading></loading>
    </van-overlay>
  </div>
</template>
<script>
import loading from "@/components/loading";
import { modelListApi, brandListApi } from "@/api/car";
import { mapState, mapActions } from "vuex";
import { getInitials } from "@/utils/index";
import { Toast } from "vant";
export default {
  name: "selectBrand",
  props: ["value"],
  components: { loading },
  data() {
    return {
      carInfo: {
        brand: "奥迪",
        model: ""
      },
      mainLoading: true,
      leftLoading: false,
      rightLoading: false,
      // 车辆品牌首字母数组
      initialsList: [],
      brandObj: {},
      modelList: [],

      // 选中的品牌
      changeBrandId: 18,
      changeModel: "",
      isError: false
    };
  },
  created() {
    this.init();
  },
  mounted() {
    // IOS 中 van-index-bar 显示不正常  z-index问题   从left 移动到 main中
    let indexBarDOM = document.querySelector(
      ".selec-brand .van-index-bar__sidebar"
    );
    let mianDOM = document.querySelector(".selec-brand .main");
    let leftDOM = document.querySelector(".selec-brand .left");
    mianDOM.insertBefore(indexBarDOM, leftDOM);
  },
  methods: {
    init() {
      this.brandObj = JSON.parse(sessionStorage.getItem("brandObj")) || {};
      this.initialsList =
        JSON.parse(sessionStorage.getItem("initialsList")) || [];
      ///sessionStorage 如果有 不重新获取
      if (this.initialsList.length == 0) {
        this.getBrand();
      }
      this.getModelList(this.changeBrandId);
    },
    async getBrand() {
      let brandList = [];
      let brandObj = {};
      let initialsSet = new Set();
      let initialsList = [];

      try {
        let res = await brandListApi({
          pageReq: { pageSize: 1000, pageNum: 1 }
        });
        if (res.code == 200) {
          brandList = res.data;
          brandList.forEach(item => {
            let initials = getInitials(item.brandName);
            brandObj[initials] = brandObj[initials] || [];
            brandObj[initials].push(item);
            initialsSet.add(initials);
          });
          let list = Array.from(initialsSet);
          initialsList = list.sort();
          this.brandObj = brandObj;
          this.initialsList = initialsList;
          // 存入 sessionStorage
          sessionStorage.setItem("brandObj", JSON.stringify(brandObj));
          sessionStorage.setItem("initialsList", JSON.stringify(initialsList));
        } else {
          throw "code not 200";
        }
      } catch (error) {
        Toast.fail("未知错误");
      }
    },
    async getModelList(brandId) {
      const req = {
        brandId
      };
      try {
        this.mainLoading = true;
        let res = await modelListApi(req);
        if (res.code == 200) {
          this.modelList = res.data;
        } else {
          throw "error";
        }
      } catch (error) {
        Toast.clear();
        this.isError = true;
      } finally {
        this.mainLoading = false;
      }
    },

    async handleClickBrand(brand) {
      this.changeBrandId = brand.brandId;
      await this.getModelList(brand.brandId);
      this.carInfo.brand = brand.brandName;
    },
    handleClickModel(name) {
      this.changeModel = name;
      this.carInfo.model = name;
      this.$emit("input", this.carInfo);
      this.$emit("closed");
    },
    closed() {
      this.$emit("closed", this.carInfo);
    },
    handleRefresh() {
      this.isError = false;
      this.getBrand();
      this.getModelList(this.changeBrandId);
    }
  }
};
</script>
<style lang="scss">
.selec-brand {
  .van-overlay {
    background-color: rgba(255, 255, 255, 0.7);
  }
  .brand-item {
    width: 33vw;
  }
  .van-index-bar__index {
    color: #ccc;
  }
}
</style>
<style lang="scss" scoped>
.selec-brand {
  overflow: hidden;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100vw;
}
.header {
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #ccc;
  background: #fff;
  z-index: 999;
  .closed {
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
  }
}
.main {
  width: 100%;
  overflow: hidden;
  position: fixed;
  height: 92vh;
  top: 8vh;
  user-select: none;
  .left {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background: #fff;
  }
  .right {
    position: fixed;
    right: 0;
    top: 8vh;
    z-index: 20;
    width: 67vw;
    height: 100vh;
    padding-bottom: 30vh;
    overflow-x: hidden;
    background: rgb(248, 248, 248);
  }
}
.main::-webkit-scrollbar {
  display: none;
}
.right::scrollbar {
  display: none;
}
.brand-item {
  position: relative;
  height: 120px;
  background: #ffffff;
  font-size: 22px;
  display: flex;
  padding: 0 2vw;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
  img {
    width: 7vw;
    height: 7vw;
  }
  .brand-name {
    padding-left: 2vw;
  }
}
.brand-item.hover::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: rgb(219, 0, 0);
  width: 5px;
  height: 30px;
}
.model-item {
  height: 76px;
  line-height: 76px;
  padding: 0 30px;
  font-size: 26px;
  font-weight: 300;
}
.model-item.hover {
  background: #fff;
}
</style>
