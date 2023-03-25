<template>
  <div>
    <span>姓名：</span>
    <input type="text"  v-model="full">
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {},
  /**
   * 计算属性也是变量，当需要给计算属性赋值时，使用计算属性的完整写法
   * computed:{
   *  "计算属性名"(){},  // 简写
   *  "计算属性名":{     // 完整写法
   *      set(值){
   *      
   *      },
   *      get(){
   *          return 值
   *      }
   *   }
   * }
   */
  computed:{
    full:{
      // 给full赋值触发set方法
      set(val){
        console.log(val);
      },
      // 使用full的值触发get方法
      get(){
        return this.set
        // return '豪雨'
      }
    }
  }
}

</script>
<style scoped>
</style>
