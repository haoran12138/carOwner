import protoService from "@/utils/protoRequest";
import { arrayToProto } from "@/utils/protoUtils";

// 上传图片
export function uploadApi(data) {
  return protoService({
    url: "system/upload/uploadFile",
    method: "post",
    data: data,
    isToken: false,
    contentType: "application/x-www-form-urlencoded"
  });
}
