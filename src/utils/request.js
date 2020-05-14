import axios from "axios";
import { getToken } from "./auth.js";
import { baseURL } from "@/config";
import { Toast } from "vant";
const service = axios.create({
  baseURL: baseURL + "/match/pre", // api 的 base_url
  timeout: 8000, // request timeout
  headers: {
    accept: "*/*",
    "jf-appdevice": "h5",
    jf_token: "123",
    "jf-appversion": "3.01"
  },
  validateStatus: function(status) {
    return status < 500; // 状态码在大于或等于500时才会 reject
  }
});

service.interceptors.request.use(
  config => {
    let token = getToken();

    if (token) {
      config.headers["jf-auth"] = token;
    } else {
      config.headers["jf-auth"] = "";
    }
    return config;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  res => {
    console.log(res);
    if (res.data.header.code == 401 || res.data.header.code == 407) {
      debugger;
      Toast.fail(res.msg);
      // removeToken();
      // window.location.replace("/login");
    }
    if (res.code == 999) {
      Toast.fail(res.msg);
    }
    return res;

    // if the custom code is not 20000, it is judged as an error.
  },
  error => {
    console.log(error);
    Toast.fail("网络错误 请稍后重试");
  }
);

export default service;
