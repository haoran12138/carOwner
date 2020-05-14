<template>
  <div class="container cardId">
    <van-nav-bar title="身份证" left-arrow @click-left="onClickLeft" />
    <div class="center">
      <van-uploader
        ref="upload"
        v-model="fileList"
        :max-count="1"
        :deletable="false"
        :after-read="afterRead"
      ></van-uploader>
      <div @click="delImage">重新上传</div>
    </div>
    <div class="carid-form">
      <div class="form-item" :class="{ hover: changeFormName == 'cardName' }">
        <div class="form-title">姓名</div>
        <div class="form-input">
          <van-field
            @focus="focusCardName"
            @blur="blurCardName"
            v-model="cardName"
          />
        </div>
      </div>
      <div class="form-item" :class="{ hover: changeFormName == 'cardId' }">
        <div class="form-title">身份证号</div>
        <div class="form-input">
          <van-field @focus="focusCardId" @blur="blurCardId" :value="cardId" />
        </div>
      </div>
    </div>
    <van-popup position="bottom" v-model="showCropper">
      <!--        v-if="showCropper" 使主件 重新加载 -->
      <i-cropper
        v-if="showCropper"
        :aspectRatio="2"
        :oriImg="oriImg"
        @cloesdCropper="cloesdCropper"
        @confirmCropper="confirmCropper"
      ></i-cropper>
    </van-popup>
    <!-- 身份证键盘 -->
    <!-- <van-number-keyboard
      :show="showCardIdKeys"
      extra-key="X"
      @blur="showCardIdKeys = false"
      v-model="cardId"
    /> -->
  </div>
</template>
<script>
import { uploadApi } from "@/api/sys";
import iCropper from "@/components/iCropper";
import { Toast } from "vant";
export default {
  name: "cardId",
  components: { iCropper },
  data() {
    return {
      fileList: [],
      showCropper: false,
      cropperImg: "",
      oriImg: "",
      cardName: "",
      cardId: "",
      changeFormName: ""
    };
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.replace({ name: "perfectInfo" });
    },
    afterRead(file) {
      this.showCropper = true;
      file.status = "";
      file.message = "";
      this.oriImg = file.content;
    },
    cloesdCropper() {
      this.fileList = [];
      this.showCropper = false;
    },
    confirmCropper(file) {
      this.showCropper = false;
      this.fileList[0].status = "uploading";
      this.fileList[0].message = "上传中...";
      this.upload(file);
    },
    async upload(file) {
      let fd = new FormData();
      fd.append("uploadFile", file);

      try {
        let res = await uploadApi(fd);
        if (res.code == 200) {
          this.fileList[0].status = "";
          this.fileList[0].message = "";
          this.fileList[0].content = res.data[0].url;
          Toast.success("上传成功");
        } else {
          throw "code not 200";
        }
      } catch (error) {
        this.fileList.pop();
        Toast.error("上传失败");
      }
    },
    delImage() {
      this.fileList.pop();
    },

    focusCardName() {
      this.changeFormName = "cardName";
    },
    blurCardName() {
      this.changeFormName = "";
    },
    focusCardId() {
      this.changeFormName = "cardId";
    },
    blurCardId() {
      this.changeFormName = "";
    }
  }
};
</script>
<style lang="scss">
.cardId {
  .van-uploader__upload,
  .van-uploader__preview-image {
    width: 90vw;
    height: 45vw;
  }
  .center {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .carid-form {
    padding: 0 32px;
    .form-title {
      height: 100px;
      line-height: 100px;
    }
    .form-input {
      border: 3px solid #ccc;
    }
    .form-item.hover {
      .form-input {
        border: 3px solid #e63d33;
      }
    }
  }
}
</style>
