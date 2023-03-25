<template>
  <div>
    <p>原来的msg：{{ msg }}</p>
    <!-- 过滤器传参 -->
    <p>翻转且传参后的msg：{{ msg | reverse('|') }}</p>
    <!-- 多个过滤器 -->
    <p :title="msg | reverse('|') | toUpper">鼠标长停</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello,World!',
    }
  },
  methods: {},
  filters: {
    toUpper(val) {
      return val.toUpperCase()
    },
  },
}
</script>
<style scoped></style>
