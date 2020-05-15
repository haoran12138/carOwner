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
            @input="changeCardName"
          />
        </div>
      </div>
      <div class="form-item" :class="{ hover: changeFormName == 'cardId' }">
        <div class="form-title">身份证号</div>
        <div class="form-input">
          <van-field
            @input="changeCardId"
            @focus="focusCardId"
            @blur="blurCardId"
            v-model="cardId"
          />
        </div>
      </div>
      <div class="btn-Submit">
        <van-button
          type="primary"
          :disabled="!isSubmit"
          block
          @click="handleSubmit"
          >提交</van-button
        >
      </div>
    </div>
    <!--        v-if="showCropper" 使切割组件 重新加载 也可以在组件里设置 -->
    <van-popup position="bottom" v-model="showCropper">
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
import { ORCCardIdAPi } from "@/api/user";
import iCropper from "@/components/iCropper";
import { Toast } from "vant";
import { isNameReg, isCardIdReg } from "@/utils/regTest";
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
      changeFormName: "",
      isRules: {
        isUserName: false,
        isCardId: false,
        isORC: true
      }
    };
  },
  computed: {
    isSubmit: () => {
      let res = true;
      let isRules = this;
      for (let item in isRules) {
        if (!isRules[item]) {
          res = false;
          break;
        }
      }
      return res;
    }
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
    changeCardName() {
      this.isRules.isUserName = isNameReg(this.cardName);
    },
    changeCardId() {
      this.isRules.isCardId = isCardIdReg(this.cardId);
    },
    cloesdCropper() {
      this.fileList = [];
      this.showCropper = false;
    },
    confirmCropper(file) {
      this.showCropper = false;
      this.fileList[0].status = "uploading";
      this.fileList[0].message = "身份证识别中";
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
          this.getORCCardId();
        } else {
          throw "code not 200";
        }
      } catch (error) {
        this.fileList.pop();
        Toast.fail("身份证错误 重新上传");
      }
    },
    //调用orc识别
    async getORCCardId() {
      let fd = new FormData();
      fd.append("type", "front");
      fd.append("url", this.fileList[0].content);
      try {
        let res = await ORCCardIdAPi(fd);
        console.log(res);
        if (res.data.direction == -1) {
          this.isRules.isORC = false;
          Toast.fail("识别失败 请上传清晰证件");
        } else {
          this.isRules.isORC = true;
          this.cardName = res.data.words_result["姓名"].words;
          this.cardId = res.data.words_result["公民身份号码"].words;
          // 验证 合法格式
          this.changeCardName();
          this.changeCardId();
        }
      } catch (error) {
        // 可能是 程序错误  依然运行提交
        this.isRules.isORC = true;
        Toast.fail("识别错误");
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
    },

    async handleSubmit() {
      Toast.loading({
        message: "上传中...",
        duration: 0,
        loadingType: "spinner"
      });
      setTimeout(() => {
        Toast.success({
          message: "上传成功"
        });
      }, 1000);
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
    margin-top: 32px;
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
    .btn-Submit {
      margin-top: 100px;
    }
  }
}
</style>
