import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 高德地图
import "./plugin/aMap"
// element
import "./plugin/element"



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
