<template>
  <div>
    <section>
      <div class="cars-info">
        <header>
          <div>
            <img src="@/assets/imgs/cars-logo.png" />
            <span>Mustang 2019款</span>
          </div>
          <div>
            <span class="cars-type">新能源汽车 5座</span>
          </div>
        </header>
        <main>
          <div>
            <p>粤 B745N8</p>
            <div class="electric">
              <ul class="ec-active-ol-5">
                <ol></ol>
                <ol></ol>
                <ol></ol>
                <ol></ol>
                <ol></ol>
                <ol></ol>
                <ol></ol>
                <ol></ol>
                <ol></ol>
                <ol></ol>
              </ul>
              <p class="distance">
                <span>约</span>
                <strong>600</strong>
                <span>KM</span>
              </p>
            </div>
          </div>
          <img src="@/assets/imgs/pic001.jpg" />
        </main>
        <footer>
          <span>某某停车场</span>
        </footer>
      </div>
    </section>
    <div class="cars-info cars-detailed" v-show="details">
      <div class="scroll">
        <div class="title">
          <h4>某某停车场</h4>
          <i class="iconfont icon-cha" @click="details = false"></i>
        </div>
        <header>
          <div>
            <img src="@/assets/imgs/cars-logo.png" />
            <span>Mustang 2019款</span>
          </div>
          <div>
            <span class="cars-type">新能源汽车 5座</span>
          </div>
        </header>
        <main>
          <img src="@/assets/imgs/pic001.jpg" />
          <div class="detailed-id">
            <p class="cars-id">粤 B745N8</p>
            <p class="distance">
              <span>约</span>
              <strong>600</strong>
              <span>KM</span>
            </p>
          </div>
          <div class="electric">
            <div class="now-electric" :style="{ width: '300px' }"></div>
            <div class="all-electric"></div>
          </div>
        </main>
        <p class="cars-price">取车约支付12.0元停车费，实际补贴12.0元</p>
        <div class="cars-time">
          <ul>
            <li class="active">
              <h4>日租车</h4>
              <p>￥300/1天</p>
            </li>
            <li>
              <h4>3日租车</h4>
              <p>￥499.00/3天</p>
            </li>
            <li>
              <h4>5日租车</h4>
              <p>￥799.00/5天</p>
            </li>
            <li>
              <h4>小时租车</h4>
              <p>￥99.00/1小时</p>
            </li>
          </ul>
        </div>
        <div class="cars-rule">
          <h4>参保《全面保障服务》用车更放心</h4>
          <p>
            <span class="iconfont icon-duigoutianchong- active"></span>
            <span class="iconfont icon-duigoutianchong-"></span>
          </p>
        </div>
        <div class="select-cars-btn">预约用车</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarList",
  props: {
    details: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>