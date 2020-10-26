<template>
  <div class="cars">
    <!-- 汽车列表 -->
    <div class="cars-list">
      <swiper class="swiper" ref="mySwiper" :options="swiperOption">
        <swiper-slide><carsList :details="details"/></swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import carsList from "@c/carsList";
export default {
  name: "Cars",
  components: {
    carsList,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        //swiper配置
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      details: true //车辆详情展开
    };
  }
};
</script>

<style lang='scss'>
@import "./index.scss";
</style>