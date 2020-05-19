import axios from "axios";
import { getToken, removeToken } from "./auth.js";
import { baseURL } from "@/config";
import { protoToArray } from "./protoUtils";
import { Toast } from "vant";
const service = axios.create({
  timeout: 8000,
  headers: {
    accept: "*/*",
    "jf-appdevice": "h5",
    "jf-appversion": "3.0.2"
    // "content-type": "multipart/form-data"
  },
  baseURL: baseURL,
  responseType: "arraybuffer",
  validateStatus: function(status) {
    return status < 500; // 状态码在大于或等于500时才会 reject
  }
});

service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config;
  },
  error => {
    // console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = protoToArray(response);
    console.log(res);
    if (res.code == 401 || res.code == 407) {
      Toast.fail(res.msg);
      removeToken();
      window.location.replace("/login");
    }
    if (res.code == 999) {
      Toast.fail(res.msg);
    }
    return res;

    // if the custom code is not 20000, it is judged as an error.
  },
  error => {
    Toast.fail("网络错误 请稍后重试");
    return false; // 不抛出错误
  }
);

function protoService({
  url,
  method,
  data,
  // 该接口 是否需要 token 不需要传 空字符串
  isToken = true,
  // 该接口 的 contentType
  contentType = "application/x-protobuf",
  timeout = 8000
}) {
  //异步 不在拦截器里处理
  let headers = {};
  let token = getToken();
  headers["content-type"] = contentType;
  if (token && isToken) {
    headers["jf-auth"] = token;
  } else {
    headers["jf-auth"] = "";
  }

  return service({ url, method, data, headers, timeout });
}

export default protoService;
