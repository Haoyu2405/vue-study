<template>
  <div>
    <!-- 
      * 组件通信，父(App.vue)传子(MyProduct.vue)  (谁被引入，谁是子)
      * 1.子组件里准备好参数 props: ['title', 'price', 'intro'] title、price、intro都是自定义的变量名
      * 2.父组件导入子组件
      * 3.父组件接收参数并赋值使用
     -->
<Product title="超好7的口水鸭" price="50" intro="开业大酬宾,全场8折!"></Product>
<Product title="好可爱的可爱多" price="5201314---++++" intro="三生三世十里桃花"></Product>
<Product title="北京烤鸭" price="299" :intro="str"></Product>
  </div>
</template>

<script>
import Product from './components/组件03_MyProduct.vue'
export default {
  data () {
    return {
      str:'领导不在公司，全场一折!'
    }
  },
  methods: {},
  components:{
    // 当key和value相同时，可以简写
    // Product: Product -> Product
    Product
  }
}

</script>
<style scoped>
</style>
