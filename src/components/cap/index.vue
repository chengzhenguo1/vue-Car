<template>
  <div class="cap-btn">获取验证码</div>
</template>

<script>
export default {
  name: "Cap"
};
</script>

<style lang="scss" scoped>
.cap-btn {
  position: absolute;
  z-index: 2;
  top: 4px;
  right: 4px;
  width: 100px;
  height: 32px;
  background-color: #34393f;
  border-radius: 5px;
  text-align: center;
  line-height: 32px;
  font-size: 12px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>