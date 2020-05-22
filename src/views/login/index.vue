<template>
  <div class="container">
    <div class="main">
      <div class="title">
        <div>你好,</div>
        <div>欢迎来到飓风出行车主端</div>
      </div>
      <div class="center mform">
        <van-field
          :border="false"
          type="tel"
          v-model="tel"
          placeholder="请输入手机号"
          @input="changeTel"
        >
          <template #left-icon>
            <img class="input-icon" src="@/assets/image/phone.png" />
          </template>
        </van-field>
        <van-field
          size="large"
          :border="false"
          v-model="captcha"
          type="number"
          :maxLength="4"
          placeholder="请输入验证码"
          @input="changeCaptcha"
        >
          <template #left-icon>
            <img class="input-icon" src="@/assets/image/captcha.png" />
          </template>
          <template #button>
            <div class="time-down" v-if="captchaLoading">
              <van-count-down
                @finish="finishTime"
                :time="time"
                format="重新获取(ss)"
              />
            </div>
            <div
              v-else
              class="get-captcha"
              :class="{ disabled: !isTel }"
              @click="gitCaptcha"
            >
              获取验证码
            </div>
          </template>
        </van-field>
        <van-button
          class="login-btn"
          :class="{ disabled: !isLogin }"
          color="#E63D33"
          block
          @click="handleLogin"
          >登录</van-button
        >
      </div>

      <div class="protocol">
        <div @click="changeProtocol" class="switch">
          <div v-if="isProtocol" class="btn on"></div>
          <div v-else class="btn off"></div>
        </div>

        <div class="txt">
          未注册将为您创建账号并代表您已同意
          <a href="http://www.jfchuxing.com/pages/jfcxserverule.html#/"
            >《用户服务协议》</a
          >
        </div>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { login, verifyCodeSendApi } from "@/api/user";
import { setToken, getToken } from "@/utils/auth";
import Cookies from "js-cookie";
export default {
  name: "login",
  data() {
    return {
      tel: "",
      captcha: "",
      // 手机号合法
      isTel: false,
      //验证码合法
      isCaptcha: false,
      // 验证码等待
      captchaLoading: false,
      // 是否同意协议
      isProtocol: true,
      time: 60 * 1000,
      // 推荐Id
      rId: null,
    };
  },
  computed: {
    isLogin: function() {
      return this.isTel && this.isCaptcha && this.isProtocol;
    },
  },
  created() {
    let rid = this.$route.query.id;
    this.recommendId = Cookies.get("recommendId");
    if (!rid && !this.recommendId) {
      Toast.fail("数据错误 请重新扫码");
    } else {
      this.rId = rid || this.recommendId;
      Cookies.set("recommendId", this.rId);
    }

    let token = getToken();

    if (token) {
      // 有token
      this.$router.replace({ name: "carList" });
    } else if (!token && rid) {
      // 没有token 且有 rid(扫码进入有rid  退出或超时进入登陆页无rid) 调用微信授权
      this.wxlogin();
    }
  },
  beforeDestroy() {
    Toast.clear();
  },
  methods: {
    async gitCaptcha() {
      if (!this.isTel) {
        Toast("号码错误请重新输入");
        return;
      }
      try {
        this.captchaLoading = true;
        this.time = 60 * 1000;
        let res = {};
        res.tel = this.tel;
        res.type = "0";
        let req = await verifyCodeSendApi(res);
        if (res === false) {
          return;
        }
        if (req.code == 200) {
          // console.log("发送成功");
        } else {
          throw "发送失败";
        }
      } catch (error) {
        this.time = 5000;
        Toast.fail("发送失败");
      }
    },
    changeTel(tel) {
      if (!/^1[23456789]\d{9}$/.test(tel)) {
        this.isTel = false;
      } else {
        this.isTel = true;
      }
    },
    changeCaptcha(val) {
      if (val.length == 4) {
        this.isCaptcha = true;
      } else {
        this.isCaptcha = false;
      }
    },
    async handleLogin() {
      if (!this.isProtocol) {
        Toast("请确认用户协议");
        return;
      }
      if (!this.isTel) {
        Toast("号码错误请重新输入");
        return;
      }
      if (!this.isCaptcha) {
        Toast("请合法验证码");
        return;
      }

      let req = {};
      req.tel = this.tel;
      req.code = this.captcha;
      req.loginChannel = "3";
      let tLoading = Toast.loading({
        duration: 0, // 持续展示 toast
        message: "正在登陆中",
      });
      try {
        let res = await login(req, this.rId);
        if (res === false) {
          return;
        }
        if (res.code == 200) {
          let data = res.data[0];
          setToken(data.token);
          // this.SET_USER_INFO({ userId: data.userId });
          Toast.loading({
            duration: 0,
            message: "登陆成功,正在跳转",
          });
          // 登陆成功
          this.$router.replace({
            name: "carList",
          });
        } else {
          console.log(res.code);
        }
      } catch (error) {
        Toast.fail("未知错误");
      } finally {
        tLoading.clear;
      }
    },
    finishTime() {
      this.captchaLoading = false;
    },
    changeProtocol() {
      this.isProtocol = !this.isProtocol;
    },
    async wxlogin() {
      let data = {
        appid: "wx19ce2dab89d8c1d6",
        redirect_uri: encodeURI("http://qcs.5gzvip.idcfengye.com/"),
        response_type: "code",
        scope: "snsapi_base",
      };
      let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${data.appid}&redirect_uri=${data.redirect_uri}&response_type=${data.response_type}&scope=${data.scope}#wechat_redirect`;

      let r =
        "http://192.168.0.106:8080/?code=061snXuf1XD56u04govf1CJOuf1snXu4&state=#/";
      window.location.replace(url);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 0 56px;
  min-height: 100vh;
}
.main {
  min-height: 80vh;
  position: relative;
  z-index: 2;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  & > div {
    width: 100%;
  }
}
.title {
  font-size: 46px;
  font-weight: 600;
  color: rgba(34, 41, 67, 1);
  line-height: 70px;
  letter-spacing: 3px;
  text-align: left;
}
.center {
  height: 600px;
  .login-btn {
    margin-top: 100px;
    &.disabled {
      opacity: 0.5;
    }
  }
}
.protocol {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  .switch {
    margin: 10px;
    .btn {
      position: relative;
      width: 32px;
      height: 32px;
      border: 5px solid rgb(87, 87, 87);
      border-radius: 50%;
    }
    .btn.on::after {
      display: block;
      content: "";
      position: absolute;
      width: 18px;
      height: 18px;
      top: 50%;
      left: 50%;
      transform: translate(-9px, -9px);
      background: red;
      border-radius: 50%;
    }
  }
  .txt {
    width: 100%;
    font-size: 24px;
    font-weight: 300;
    color: rgba(182, 183, 187, 1);
    line-height: 34px;
    a {
      white-space: nowrap;
    }
  }
}
.bg {
  position: fixed;
  z-index: 1;
  right: -330px;
  top: -300px;
  width: 660px;
  height: 660px;
  opacity: 0.5;
  border: 100px solid rgba(244, 244, 245, 1);
  border-radius: 50%;
}
.get-captcha {
  color: #bf332a;
  &.disabled {
    color: #7a7f8e;
  }
}
</style>
