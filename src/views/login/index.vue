<template>
  <div class="container">
    <div class="main">
      <div class="title">
        <div>你好,</div>
        <div>欢迎来到飓风出现车主端</div>
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
          placeholder="请输入验证码"
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
          <a href="">《用户服务协议》</a>
        </div>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>
<script>
import { Toast } from "vant";
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
      isProtocol: false,
      time: 60 * 1000
    };
  },
  computed: {
    isLogin: function() {
      return this.isTel && this.isCaptcha && this.isProtocol;
    }
  },
  created() {},
  methods: {
    gitCaptcha() {
      if (!this.isTel) {
        Toast("号码错误请重新输入");
        return;
      }

      this.captchaLoading = true;
      this.time = 60 * 1000;
    },
    changeTel(tel) {
      if (!/^1[3456789]\d{9}$/.test(tel)) {
        this.isTel = false;
      } else {
        this.isTel = true;
      }
    },
    handleLogin() {
      if (!this.isProtocol) {
        Toast("请确认用户协议");
        return;
      }
      if (!this.isTel) {
        Toast("号码错误请重新输入");
        return;
      }
      if (!this.isCaptcha) {
        Toast("请输入验证码");
        return;
      }
    },
    finishTime() {
      this.captchaLoading = false;
    },
    changeProtocol() {
      this.isProtocol = !this.isProtocol;
    }
  }
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
  div {
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
  align-items: center;
  justify-content: space-around;
  .switch {
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
    font-size: 24px;
    font-weight: 300;
    color: rgba(182, 183, 187, 1);
    line-height: 34px;
    white-space: nowrap;
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
