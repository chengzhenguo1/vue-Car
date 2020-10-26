import VueAMap from 'vue-amap';
import Vue from 'vue';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '3b2daf34b431646aa4930654c69a12f5',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
