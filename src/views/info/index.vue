<template>
  <div class="info">
    <Title title="基本信息" />
    <div class="form-ui">
      <div class="card">
        <router-link to="/member-lv" tag="header">
          <strong>LV.2 </strong>会员
          <span>
            <i class="iconfont icon-huangguan" />
          </span>
        </router-link>
        <main>个性先锋</main>
        <footer>会员有效期至 2020/07/01</footer>
        <i class="iconfont icon-bangzhu"></i>
      </div>
      <div class="money">
        <div class="money-help font-title">
          <h4>当前余额</h4>
          <i class="iconfont icon-bangzhu"></i>
        </div>
        <div class="remaining">
          <div>
            <span>￥</span>
            <strong>2000.00</strong>
          </div>
          <router-link class="put" to="/put" tag="a">去充值</router-link>
        </div>
      </div>
      <div class="mileage">
        <h4 class="font-title">我的里程</h4>
        <p>30000公里</p>
      </div>
      <div class="violation-info">
        <h4 class="font-title">违章信息</h4>
        <div class="v-not-yet">
          <p>待处理违章</p>
          <p class="num">10单</p>
        </div>
        <div class="v-price">
          <p>违章预存金</p>
          <p class="num">￥200</p>
        </div>
      </div>
      <div class="ticket">
        <h4 class="font-title">发票</h4>
        <div class="t-price">
          <p>可开发票金额</p>
          <p class="num">￥200</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@c/title/index.vue";
export default {
  name: "Info",
  components: {
    Title
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>