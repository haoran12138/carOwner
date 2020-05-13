import protoRoot from "@/proto/proto.js";

export function arrayToProto(data, requestType) {
  // for (let item in data) {
  //   if (Object.prototype.toString.call(data[item]) === "[object Object]") {
  //     data[item] = arrayToProto(data[item], "jfCloud_proto.PageReq");
  //   }
  // }
  let pbConstruct = protoRoot.lookupType(requestType);
  let protoObj = pbConstruct.encode(pbConstruct.create(data)).finish();
  return new Int8Array(protoObj);
}

export function protoToArray(response) {
  const pbConstruct = protoRoot.lookupType("jfCloud_proto.Result");
  const res = pbConstruct.decode(new Uint8Array(response.data));
  res.data = formatData(res.data);
  return res;
}

function formatData(data) {
  if (Array.isArray(data)) {
    return data.map(item => {
      return protoRoot
        .lookupType(item.type_url.split("/")[1])
        .decode(item.value);
    });
  } else {
    protoRoot.lookupType(data.type_url.split("/")[1]).decode(data.value);
  }
}

export let protoObj = protoRoot.nested.jfCloud_proto;
