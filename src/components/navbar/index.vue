<template>
  <div>
    <ul class="menu-list">
      <li><i class="iconfont icon-qm"></i></li>
      <li><i class="iconfont icon-fangdajing"></i></li>
      <li class="cars-btn">
        <a href="javascript:void(0);">选择车辆</a>
      </li>
      <li><i class="iconfont icon-dingwei"></i></li>
      <li @click="toUser">
        <i class="iconfont icon-biaoqiankuozhan_wode-145 icon-user"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    toUser() {
      this.$router.push({ name: "User" });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>