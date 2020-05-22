<template>
  <div class="container carDesc">
    <van-nav-bar title="车辆描述" left-arrow @click-left="onClickLeft" />
    <div class="center">
      <div class="desc">
        <van-field
          v-model="message"
          rows="18"
          autosize
          type="textarea"
          maxlength="500"
          placeholder="车辆描述"
          show-word-limit
        />
      </div>
      <div class="btn-Submit">
        <van-button type="primary" block @click="handleSubmit">保存</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Toast } from "vant";
import { updateCarByIdApi } from "@/api/user";
export default {
  name: "CarDesc",
  data() {
    return {
      message: ""
    };
  },
  computed: {
    ...mapState(["carDesc", "carId"])
  },
  created() {
    if (!this.carId) {
      this.$router.replace({ name: "carList" });
    }
    this.message = this.carDesc;
  },
  methods: {
    async handleSubmit() {
      Toast.loading({
        duration: 0,
        message: "保存中"
      });
      try {
        let fd = new FormData();
        fd.append("id", this.carId);
        fd.append("carDesc", this.message);
        let res = await updateCarByIdApi(fd);
        if (res === false) {
          return;
        }
        if (res.data.header.code == 200) {
          Toast.success({
            duration: 500,
            message: "已保存"
          });
        } else {
          throw "code not 200";
        }
      } catch (error) {
        Toast.fail("未知错误");
      }
    },
    onClickLeft() {
      this.$router.replace({ name: "perfectInfo" });
    }
  }
};
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.center {
  padding: 32px;
}
.desc {
  background: rgb(226, 226, 226);
  padding: 20px;
}
.btn-Submit {
  padding: 32px 0;
}
</style>
