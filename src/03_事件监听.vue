<template>
  <div>
    <!-- 事件绑定
  语法：v-on:事件名="少量代码"
  语法：v-on:事件名="method里的函数"
  语法：v-on:事件名="method里的函数（参数）"
  语法简写：v-on: -> @
-->
    <p>{{ count }}</p>
    <button v-on:click="count = count + 1">+1</button>
    <button v-on:click="addFn">+1</button>
    <button v-on:click="addCountFn(10)">+10</button>
    <button @click="subFn">-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    }
  },
  // 定义函数
  methods: {
    addFn() {
      // this指向export default的{}
      // data函数会把当前对象挂载到当前组件对象上
      this.count++
    },
    addCountFn(num){
      this.count += num
    },
    subFn(){
      this.count--
    }
  },
}
</script>
<style scoped></style>
