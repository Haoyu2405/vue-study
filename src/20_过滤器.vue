<template>
  <!-- 
    过滤器：传入一个值，处理后返回另外一个值
   * 定义语法：
     main.js - Vue.filter('过滤器名字',函数体)
     某个.vue文件- filters:{'过滤器名字'：函数体}
   * 使用语法：
    Vue变量 | 过滤器名字
   * 注意事项：
    只能使用在 插值表达式 / 动态属性
   -->
  <div>
<p>原来的msg：{{ msg }}</p>
<p>翻转后的msg：{{ msg | reverse }}</p>
<p :title="msg | toUpper">鼠标长停</p>
  </div>
</template>

<script> 
export default {
  data () {
    return {
      msg:'Hello,World!'
    }
  },
  methods: {
    
  },
  /**
   * 过滤器（局部）
   * filters:{ 
   *  过滤器名(val){
   *   return 处理后的值
   * }
   * }
   */
  filters:{
      toUpper(val){
        return val.toUpperCase()
      }
    }
}

</script>
<style scoped>
</style>
