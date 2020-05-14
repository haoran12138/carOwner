<template>
  <div class="container">
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <div class="header">
        <header-com title="我的车辆"></header-com>
      </div>
      <van-swipe-cell
        style="margin:10px 0"
        v-for="(item, index) in list"
        :key="index"
      >
        <van-card
          @click="handleClickCar"
          :desc="item.plateNumber"
          :title="item.brand + ' ' + item.model"
          :centered="true"
          :thumb="item.carThumbPic || defaultUrl"
        >
          <template #tags>
            <van-tag plain type="danger">{{
              item.carStatus | formateStatus
            }}</van-tag>
          </template>
        </van-card>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
      <div class="btn-box">
        <van-button
          round
          class="add-btn"
          color="#E63D33"
          block
          @click="handleAdd"
          >添加新车辆</van-button
        >
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
import headerCom from "@/components/headerCom";
import { getUserCarListApi } from "@/api/user";
import { Toast } from "vant";
// 车辆状态 0未审核 1上线 2下线 3审核通过 4未通过
let statusList = ["未审核", "上线", "下线", "审核通过", "未通过"];
export default {
  name: "carList",
  data() {
    return {
      isLoading: false,
      list: [],
      defaultUrl: "http://image.jufengchaopao.com/JPIC15894607295541532.png"
    };
  },
  filters: {
    formateStatus(status) {
      return statusList[status];
    }
  },
  components: { headerCom },
  created() {
    this.init();
  },
  activated() {
    this.init();
  },
  methods: {
    init() {
      this.query();
    },
    onRefresh() {
      this.init();
    },
    async query() {
      this.isLoading = true;
      try {
        let res = await getUserCarListApi();
        if (res.data.header.code) {
          this.list = res.data.body;
        } else {
          Toast.fail(res.data.header.desc);
        }
      } catch (error) {
        Toast.fail("数据错误");
      } finally {
        this.isLoading = false;
      }
    },
    handleAdd() {
      this.$router.replace({ name: "basicInfo" });
    },
    handleClickCar() {
      this.$router.replace({ name: "perfectInfo", query: { id: 111 } });
      console.log("aaa");
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding-bottom: 250px;
}
.btn-box {
  position: fixed;
  bottom: 100px;
  padding: 0 40px;
  width: 40%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.8;
}
.delete-button {
  height: 100%;
}
</style>
