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
export function verifyCodeSendApi(data, p) {
  let url = "user/nsp/verifycode/send?user_id=" + p;
  return protoService({
    url,
    method: "post",
    isToken: false,
    data: arrayToProto(data, "jfCloud_proto.VerifyCodeSendReq")
  });
}

// 验证第三方登录是否绑定
export function checkOtherLoginApi(data, p) {
  let url = "user/nsp/checkOtherLogin?user_id=" + p;
  return protoService({
    url,
    method: "post",
    isToken: false,
    data: arrayToProto(data, "jfCloud_proto.CheckOtherLoginReq")
  });
}

// 绑定并登陆
export function otherLoginApi(data, p) {
  let url = "user/nsp/otherLogin/bind?user_id=" + p;
  return protoService({
    url,
    method: "post",
    isToken: false,
    data: arrayToProto(data, "jfCloud_proto.OtherLoginReq")
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

// 获取用户车辆信息
export function getCarByIdApi(data) {
  return service({
    url: "match/pre/H5/car/getCarById",
    method: "post",
    data
  });
}

// 修改用户车辆信息
export function updateCarByIdApi(data) {
  return service({
    url: "match/pre/H5/car/updateCar",
    method: "post",
    data
  });
}
