<template>
  <div class="container">
    <div @click="submit">submit</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  methods: {
    async submit() {
      let data = {
        appid: "wx06c25adcfe124057",
        redirect_uri: encodeURI("http://localhost:8080"),
        response_type: "code",
        scope: "snsapi_base"
      };
      let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${data.appid}&redirect_uri=${data.redirect_uri}&response_type=${data.response_type}&scope=${data.scope}#wechat_redirect`;
      window.location.replace(url);
    }
  }
};
</script>
<style lang="scss" scoped></style>
