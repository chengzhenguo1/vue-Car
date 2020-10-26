<template>
  <div>
    <Title title="修改登录密码" />
    <el-form ref="form" class="form-ui" :model="passwordForm">
      <el-form-item>
        <el-input v-model="passwordForm.old" placeholder="原始密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="passwordForm.new" placeholder="新密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="passwordForm.confirm"
          placeholder="确认密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="passwordForm.captcha"
          placeholder="验证码"
        ></el-input>
        <div class="cap-btn">获取验证码</div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Title from "@c/title";
export default {
  name: "Password",
  components: {
    Title
  },
  data() {
    return {
      passwordForm: {
        //修改密码表番
        old: "",
        new: "",
        confirm: "",
        captcha: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.el-button--primary {
  width: 100%;
}
</style>