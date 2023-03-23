<template>
  <div>
    <p v-text="str">{{ 12424 }}</p>
    <p v-html="str"></p>
    <!-- 注意：v-text和v-html都会覆盖插值表达式 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: '<span>1245</span>',
    }
  },
}
</script>
<style scoped></style>
