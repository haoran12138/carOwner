import protoService from "@/utils/protoRequest";
import service from "@/utils/request";
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

export function proxyGet(data) {
  return service({
    url: "/match/getProxy",
    method: "post",
    data: data,
    isToken: false,
    contentType: "application/x-www-form-urlencoded"
  });
}
