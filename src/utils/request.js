import axios from "axios";
import { getToken } from "./auth.js";
import { baseURL } from "@/config";
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
  response => {
    // console.log(response, '测试')
    // console.log('res', response)
    if (response.data.header.code != 200) {
      return Promise.reject(response);
    } else {
      return response;
    }
  },

  (error, status) => {
    console.log(error); // for debug

    return Promise.reject(error);
  }
);

export default service;
