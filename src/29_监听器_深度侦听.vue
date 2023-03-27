<template>
  <div>
    <input type="text" v-model="user.name" />
    <input type="text" v-model="user.age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name:'',
        age:0
      }
    }
  },
  methods: {},
  // 监听器
  // 使用watch配置项，key是要监听的data/computed属性名
  // watch: {
    
    // newVal -> 新的值
    // oldVal -> 旧的值
  //   变量名(newVal, oldVal) {
 
  //   },

    // 变量名：{
    //   immediate:true, // 立即侦听(网页打开handle执行一次)
    //   deep:true, // 深度侦听(对象里面层的值改变)
    //   handler(newVal,oldVal) {

    //   }
  // }

  // },
  watch: {
   user:{
    immediate:true,
    deep:true,
    handler(newVal,oldVal){
      console.log(newVal,oldVal);
    }
   }
  },
}
</script>
<style scoped></style>
