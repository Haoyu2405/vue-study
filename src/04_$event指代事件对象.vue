<template>
  <div>
    <!-- 无传参，通过形参直接接收 -->
    <a @click="one" href="http://www.baidu.com">阻止去百度</a>
    <!-- 传参，通过$event指代事件对象传给事件处理函数 -->
    <a @click="two(5, $event)" href="http://www.taobao.com">阻止去淘宝</a>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    one(e) {
      e.preventDefault()
    },
    two(num, e) {
      e.preventDefault()
    },
  },
}
</script>
<style scoped></style>
