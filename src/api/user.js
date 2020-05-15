import protoService from "@/utils/protoRequest";
import { arrayToProto } from "@/utils/protoUtils";
import service from "@/utils/request";
// 登陆
export function login(data, p) {
  let url = "user/nsp/login?user_id=" + p;
  return protoService({
    url,
    method: "post",
    isToken: false,
    data: arrayToProto(data, "jfCloud_proto.UserLoginReq")
  });
}
// 获取验证码
export function verifyCodeSendApi(data) {
  return protoService({
    url: "user/nsp/verifycode/send",
    method: "post",
    isToken: false,
    data: arrayToProto(data, "jfCloud_proto.VerifyCodeSendReq")
  });
}

// 我的车辆列表
export function getUserCarListApi() {
  return service({
    url: "match/pre/H5/car/myCarList",
    method: "post"
  });
}

// 车主入驻H5(add)
export function addUserCarApi(data) {
  return service({
    url: "match/pre/H5/car/add",
    method: "post",
    data
  });
}

// orc识别 身份证
export function ORCCardIdAPi(data) {
  return service({
    url: "match/IdCardOCR",
    method: "post",
    data
  });
}

// 获取用户信息
export function getCarByIdApi(data) {
  return service({
    url: "match/pre/H5/car/getCarById",
    method: "post",
    data
  });
}

// 修改用户信息
export function updateCarByIdApi(data) {
  return service({
    url: "match/pre/H5/car/updateCar",
    method: "post",
    data
  });
}
