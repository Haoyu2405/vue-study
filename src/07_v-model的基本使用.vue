<template>
  <div>
<!-- value属性和vue数据变量双向绑定
    语法：v-model="vue数据变量"
    双向数据绑定:
    vue数据变量变化->视图自动同步
    视图变化->变量自动同步
-->
<input type="text" v-model="username">
<input type="password" v-model="password">
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'5235',
      password:'23532'
    }
  }
}
</script>
<style scoped></style>
