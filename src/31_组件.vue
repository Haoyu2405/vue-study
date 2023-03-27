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
    <!-- <Pannel></Pannel>(对应2） -->
    <Pannel></Pannel>
    <Pannel></Pannel>
  </div>
</template>

<script>
// 局部组件 
// 1.创建组件.vue文件
// 2.引入组件
// import Pannel(对应1) from './components/组件01_Pannel.vue'
// 3.使用组件
// components:{
//  Pannel（对应2）: Pannel（对应1）,
// } 
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
