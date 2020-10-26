<template>
  <div class="title">
      <i class="el-icon-arrow-left" @click="$router.back()"></i>
      <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
      title: {
          type: String,
          default: "默认标题"
      }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss"
</style>