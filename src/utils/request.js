import axios from "axios";
import { getToken, removeToken } from "./auth.js";
import { baseURL } from "@/config";
import { Toast } from "vant";
const serviceApi = axios.create({
  baseURL: baseURL, // api 的 base_url
  timeout: 8000, // request timeout
  headers: {
    accept: "*/*",
    "jf-appdevice": "h5",
    "jf-appversion": "3.0.2"
  },
  validateStatus: function(status) {
    return status < 500; // 状态码在大于或等于500时才会 reject
  }
});

serviceApi.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

serviceApi.interceptors.response.use(
  res => {
    console.log(res);
    if (res.data) {
      if (res.data.code == 401 || res.data.code == 407) {
        Toast.fail(res.data.desc);
        removeToken();
        window.location.replace("#/login");
      }
    }
    if (res.data.header && res.data.header.code == 999) {
      Toast.fail(res.data.header.msg);
    }
    return res;

    // if the custom code is not 20000, it is judged as an error.
  },
  error => {
    Toast.fail("网络错误 请稍后重试");
    return false;
  }
);

function service({
  url,
  method,
  data,
  // 该接口 是否需要 token 不需要传 空字符串
  isToken = true,
  // 该接口 的 contentType
  contentType = "",
  timeout = 8000
}) {
  //异步 不在拦截器里处理
  let headers = {};
  let token = getToken();
  // headers["content-type"] = contentType;
  if (token && isToken) {
    headers["jf-auth"] = token;
  } else {
    headers["jf-auth"] = "";
  }

  return serviceApi({ url, method, data, headers, timeout });
}

export default service;
