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
      <div class="form-item" :class="{ hover: changeFormName == 'cardIdNum' }">
        <div class="form-title">身份证号</div>
        <div class="form-input">
          <van-field
            @input="changeCardIdNum"
            @focus="focusCardIdNum"
            @blur="blurCardIdNum"
            v-model="cardIdNum"
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
import { ORCCardIdAPi, updateCarByIdApi } from "@/api/user";
import iCropper from "@/components/iCropper";
import { isNameReg, isCardIdNumReg } from "@/utils/regTest";
import { Toast } from "vant";
import { mapState } from "vuex";
export default {
  name: "cardId",
  components: { iCropper },
  data() {
    return {
      fileList: [],
      showCropper: false,
      // 切割处理后上传的图片
      cropperImg: "",
      // 选择的本地图片
      oriImg: "",
      cardName: "",
      cardIdNum: "",
      // 正在操作的input 的 class name   变色用
      changeFormName: "",
      isRuls: {
        isUserName: false,
        isCardIdNum: false,
        isORC: true
      }
    };
  },
  computed: {
    ...mapState(["cardId", "carId"]),
    isSubmit: function() {
      let res = true;
      let isRuls = this.isRuls;
      for (let item in isRuls) {
        if (!isRuls[item]) {
          res = false;
          break;
        }
      }
      return res;
    }
  },
  created() {
    if (!this.carId) {
      this.$router.replace({ name: "carList" });
    }
    let { idcard, idcardNum, ownerName } = this.cardId;
    if (idcard) {
      // 有图片才用
      this.fileList[0] = { url: idcard };
      this.cardName = ownerName;
      this.cardIdNum = idcardNum;
    }
  },
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
      this.isRuls.isUserName = isNameReg(this.cardName);
    },
    changeCardIdNum() {
      this.isRuls.isCardIdNum = isCardIdNumReg(this.cardIdNum);
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
        if (res.data.direction == -1) {
          this.isRuls.isORC = false;
          Toast.fail("识别失败 请上传清晰证件");
        } else {
          this.isRuls.isORC = true;
          this.cardName = res.data.words_result["姓名"].words;
          this.cardIdNum = res.data.words_result["公民身份号码"].words;
          // 验证 合法格式
          this.changeCardName();
          this.changeCardIdNum();
        }
      } catch (error) {
        // 可能是 程序错误  依然运行提交
        this.isRuls.isORC = true;
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
    focusCardIdNum() {
      this.changeFormName = "cardIdNum";
    },
    blurCardIdNum() {
      this.changeFormName = "";
    },

    async handleSubmit() {
      Toast.loading({
        message: "上传中...",
        duration: 0,
        loadingType: "spinner"
      });
      let fd = new FormData();
      fd.append("id", this.carId);
      fd.append("idcard", this.fileList[0].content);
      fd.append("idcardNum", this.cardIdNum);
      fd.append("ownerName", this.cardName);
      try {
        let res = await updateCarByIdApi(fd);
        if (res.data.header.code == 200) {
          Toast.success("保存完成");
          this.$router.replace({ name: "perfectInfo" });
        } else {
          throw "code not 200";
        }
      } catch (error) {
        Toast.clear();
      }
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
