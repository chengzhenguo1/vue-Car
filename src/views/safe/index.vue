<template>
  <div>
    <Title title="安全设置" />
    <ul class="group-links">
      <router-link to="/password" tag="li">
        <span>修改登录密码</span>
      </router-link>
      <router-link to="/" tag="li">
        <span>设置资金密码</span>
      </router-link>
      <router-link to="/" tag="li">
        <span>绑定手机号</span>
      </router-link>
      <router-link to="/" tag="li">
        <span>绑定银行号</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
import Title from "@c/title";
export default {
  name: "Safe",
  components: {
    Title
  }
};
</script>

<style lang="scss" scoped>
.group-links li span {
  margin-left: 0;
  color: #96989A;
}
</style>