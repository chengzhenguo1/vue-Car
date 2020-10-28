<template>
  <div>
    <!-- 地图 -->
    <Map />
    <!-- 车辆 -->
    <!-- <Cars /> -->
    <!-- 菜单 -->
    <Navbar />
    <!-- 会员 -->
    <transition name="fade">
      <div v-show="showUser" class="r-list" id="r-list">
        <router-view />
      </div>
    </transition>
    <!-- 遮罩层 -->
    <div :class="{ mask: showUser }"></div>
  </div>
</template>

<script>
import Map from "../amap/index";
import Cars from "../cars/index";
import Navbar from "@c/navbar/index";
export default {
  name: "Index",
  components: {
    Map,
    Cars,
    Navbar
  },
  computed: {
    showUser() {
      return this.$route.name === "Index" ? false : true;
    }
  },
  mounted() {
    this.closeMenu(); //点击其他地方关闭右侧菜单
  },
  methods: {
    closeMenu(e) {
      const rList = document.getElementById("r-list");
      document.addEventListener("mouseup", e => {
        if (rList && !rList.contains(e.target) && this.$route.name != "Index") {
          this.$router.push({ name: "Index" });
        }
      });
    }
  }
};
</script>

<style lang="scss">
.mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 408px;
  z-index: 90;
}
.r-list {
  position: fixed;
  z-index: 99;
  top: 0;
  bottom: 0;
  right: 0;
  width: 408px;
  background: $bg-color;
  box-shadow: -5px 0px 38px 0px rgba(0, 0, 0, 0.4);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  // opacity: 0;
  transform: translateX(500px);
}
</style>