<template>
  <div>
    <!-- // 2.使用变量，赋值到原生属性上 -->
    <!-- 语法：v-bind:原生属性="vue变量" -->
    <a v-bind:href="url">点击去百度</a>
    <!-- 简写语法: :原生属性="vue变量" -->
    <img :src=imgURL >
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  // 1.准备变量
  data() {
    return {
      msg:'sge',
      url: 'https://www.baidu.com',
      imgURL: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF',
    }
  },
}
</script>
<style scoped></style>
