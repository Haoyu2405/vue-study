<template>
  <div>
    <!-- 插值表达式（声明式渲染） 语法：{{  }} -->
   <h1> {{ msg }}</h1>
   <h2>{{ hy.name }}</h2>
   <h3>{{ hy.age }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    // 格式固定定义vue数据之处
    return {
      // key相当于变量名
      msg: 'Hello,Vue!',
      hy: {
        name: 'hy',
        age: '22',
      },
    }
  },
}
</script>
<style scoped></style>
