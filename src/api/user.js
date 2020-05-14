import protoService from "@/utils/protoRequest";
import { arrayToProto } from "@/utils/protoUtils";
import service from "@/utils/request";
// 登陆
export function login(data) {
  return protoService({
    url: "user/sp/login",
    method: "post",
    isToken: false,
    data: arrayToProto(data, "jfCloud_proto.UserLoginReq")
  });
}
// 我的车辆列表
export function getUserCarListApi() {
  return service({
    url: "H5/car/myCarList",
    method: "post"
  });
}

// 车主入驻H5(add)
export function addUserCarApi(data) {
  return service({
    url: "H5/car/add",
    method: "post",
    data
  });
}
