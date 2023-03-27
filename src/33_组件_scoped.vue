<template>
  <!-- 
      * 组件是什么？
        可复用的vue实例，封装了标签，样式，JS
      * 什么时候封装组件？
        遇到重复标签可复用的时候
      * 组件的好处？
        各自独立，互不影响，便于复用
   -->
  <div id="app">
    <h4>案例：折叠面板</h4>   
    <Pannel></Pannel>
  </div>
</template>

<script>
import Pannel from './components/组件01_Pannel.vue'
export default {
  components: {
    Pannel: Pannel,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<!-- 
  * Vue组件内样式只针对当前组件内标签生效如何做？
  * 给style标签添加scoped
  * 
  * 原理和过程？
  * style标签添加scoped，会自动给标签添加data-v-hash值属性，
  * 所有选择器都被标记
 -->
<style lang="less" scoped>
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
  }
}
</style>
