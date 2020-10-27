<template>
  <div>
    <Title title="设置资金密码" />
    <el-form ref="form" class="form-ui" :model="passwordForm">
      <el-form-item>
        <el-input
          v-model.number="passwordForm.pw"
          type="number"
          maxlength="6"
          placeholder="设置六位数的密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="passwordForm.captcha"
          placeholder="验证码"
        ></el-input>
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
  name: "MoneyPw",
  components: {
    Title,
    Cap
  },
  data() {
    return {
      passwordForm: {
        //修改密码表番
        pw: "",
        captcha: ""
      }
    };
  }
};
</script>
<style scoped>

</style>