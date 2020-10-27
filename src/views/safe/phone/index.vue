<template>
  <div>
    <Title title="绑定手机号" />
    <el-form ref="form" class="form-ui" :model="phoneForm">
      <el-form-item>
        <el-input
          v-model.number="phoneForm.phone"
          maxlength="11"
          type="number"
          placeholder="请输入手机号"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="phoneForm.captcha" placeholder="验证码"></el-input>
        <Cap />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Title from "@c/title";
import Cap from "@c/cap";
export default {
  name: "Phone",
  components: {
    Title,
    Cap
  },
  data() {
    return {
      phoneForm: {
        phone: "",
        captcha: ""
      }
    };
  }
};
</script>
