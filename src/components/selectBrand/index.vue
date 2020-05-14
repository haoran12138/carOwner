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
        <div style="height:100%" @click="handleRefresh">
          <van-empty
            style="height:100%"
            v-if="isError"
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
import { brandListApi, modelListApi } from "@/api/car";
import { getInitials } from "@/utils/index";
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
      brandList: [],
      brandObj: {},
      modelList: [],
      // 首字母数组
      initialsSet: new Set(),
      initialsList: [],

      // 选中的信息
      changeBrandId: 18,
      changeModel: "",
      isError: false
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.initialsList.forEach((item, index) => {
        this.brandObj[item] = [];
      });
      this.getBrandList();
      this.getModelList(this.changeBrandId);
    },
    async getBrandList() {
      try {
        this.mainLoading = true;
        let res = await brandListApi({
          pageReq: { pageSize: 1000, pageNum: 1 }
        });
        if (res.code == 200) {
          this.brandList = res.data;
          this.brandList.forEach((item, index) => {
            let initials = getInitials(item.brandName);
            this.brandObj[initials] = this.brandObj[initials] || [];
            this.brandObj[initials].push(item);
            this.initialsSet.add(initials);
          });
          let list = Array.from(this.initialsSet);
          this.initialsList = list.sort();
        }
      } catch (error) {
        this.isError = true;
      } finally {
        this.mainLoading = false;
      }
    },
    async getModelList(brandId) {
      const req = {
        brandId
      };

      try {
        this.rightLoading = true;
        let res = await modelListApi(req);
        if (res.code == 200) {
          this.modelList = res.data;
        }
      } catch (error) {
        this.isError = true;
      } finally {
        this.rightLoading = false;
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
      this.getBrandList();
      this.getModelList(this.changeBrandId);
    }
  }
};
</script>
<style lang="scss" scoped>
.selec-brand {
  overflow: hidden;
  position: fixed;
  top: 0;
  height: 100%;
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
  overflow: hidden;
  height: 92vh;
  padding-top: 8vh;
  user-select: none;
  .left {
    float: left;
    width: 33vw;
    height: 100%;
    overflow-x: hidden;
    background: #fff;
  }
  .right {
    float: right;
    width: 67vw;
    height: 100%;

    overflow-x: hidden;
    background: rgb(248, 248, 248);
  }
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
