<template>
  <div class="container">正在通过微信登陆...</div>
</template>
<script>
import { proxyGet } from "@/api/sys";
import { checkOtherLoginApi } from "@/api/user";
import { setToken } from "@/utils/auth";
import Cookies from "js-cookie";
import { Toast } from "vant";
export default {
  name: "loging",
  data() {
    return {
      recommendId: null
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.recommendId = Cookies.get("recommendId");
      let url = window.location.href;
      let code = url.match(/(code=)([a-zA-Z0-9]*)(&state)/)[2];
      if (code) {
        let data = {
          appid: "wx19ce2dab89d8c1d6",
          appsecret: "668a70238c3c5cce7dcf4a9e13f19e20",
          // appsecret: "b1dafa1cbd29eb5cc277711cbe6b4bac",
          response_type: "code",
          scope: "snsapi_base"
        };
        let url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${data.appid}&secret=${data.appsecret}&code=${code}&grant_type=authorization_code`;
        let fd = new FormData();
        fd.append("url", url);
        let res = await proxyGet(fd);
        if (!res.data.openid) {
          Toast.fail("自动登陆失败 请手动登陆");
          this.$router.replace({ name: "login" });
        } else {
          this.checkOtherLogin(res.data.openid);
        }
      }
    },
    async checkOtherLogin(openid) {
      let req = {};
      req.openId = openid;
      req.channelType = "0";
      let res = await checkOtherLoginApi(req, this.recommendId);
      let token = res.data[0].token;
      if (!token) {
        // 手机绑定登陆登陆
        this.$router.replace({
          name: "wxLogin",
          query: { openId: req.openId }
        });
      } else {
        // 绑定过 跳列表页
        setToken(token);
        this.$router.replace({
          name: "carList"
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped></style>
