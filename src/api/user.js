import protoService from "@/utils/protoRequest";
import { arrayToProto } from "@/utils/protoUtils";

// 登陆
export function login(data) {
  return protoService({
    url: "user/sp/login",
    method: "post",
    isToken: false,
    data: arrayToProto(data, "jfCloud_proto.UserLoginReq")
  });
}
