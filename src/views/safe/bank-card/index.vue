<template>
  <div>
    <Title title="绑定银行卡" />
    <Bank :uploadCard=false />
    <!-- <Card /> -->
  </div>
</template>

<script>
import Title from "@c/title";
import Bank from "@c/bank";
export default {
  name: "BankCard",
  components: {
    Title,
    Bank
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
