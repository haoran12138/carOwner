import protoService from "@/utils/protoRequest";
import { arrayToProto } from "@/utils/protoUtils";

// 全部车辆品牌
export function brandListApi(data) {
  return protoService({
    url: "car/info/brandList",
    method: "post",
    isToken: false,
    data: arrayToProto(data, "jfCloud_proto.CarBrandReq")
  });
}

// 品牌对应全部车型
export function modelListApi(data) {
  return protoService({
    url: "car/console/modelNames",
    method: "post",
    isToken: false,
    data: arrayToProto(data, "jfCloud_proto.ModelNameReq")
  });
}
