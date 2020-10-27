<template>
  <div class="card">
    <el-upload class="upload"  :on-change="upload" action="#">
      <!-- 已有 -->
      <div class="card-tpye" v-if="cardShow">
        <h4 class="card-name">中国银行</h4>
        <p class="card-num">3568 **** **** 8888</p>
      </div>
      <!-- 暂无上传 -->
      <i class="iconfont icon-jia" v-else></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "Bank",
  props: {
    uploadCard: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      cardShow: false
    }
  },
  created(){
   this.cardShow = this.uploadCard
  },
  methods:{
    upload(){
      this.cardShow = true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>