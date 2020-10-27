<template>
  <div class="users" id="users">
    <div class="user-info">
      <img src="@/assets/imgs/face.png" />
      <div class="meta">
        <p class="name">409019683@qq.com</p>
        <span>
          文明驾驶分
          <strong>0</strong>
        </span>
      </div>
    </div>
    <ul class="group-links">
      <router-link to="/info" tag="li">
        <i class="iconfont icon-50"></i>
        <span>我的账户</span>
      </router-link>
      <router-link to="/index" tag="li">
        <i class="iconfont icon-fangxiangpan"></i>
        <span>租车订单</span>
      </router-link>
      <router-link to="/index" tag="li">
        <i class="iconfont icon-shimingrenzheng"></i>
        <span>实名认证</span>
      </router-link>
      <router-link to="/safe" tag="li">
        <i class="iconfont icon-anquan"></i>
        <span>安全设置</span>
      </router-link>
      <router-link to="/index" tag="li">
        <i class="iconfont icon-bangzhu"></i>
        <span>帮助中心</span>
      </router-link>
    </ul>
    <button class="log-out" type="button">登出</button>
  </div>
</template>

<script>
export default {
  name: "Users"
};
</script>
<style lang="scss">
@import "./index.scss";
</style>