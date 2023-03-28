<template>
  <div>
    <!-- 目标：子传父 -->
    <!-- 语法：1. @自定义函数名=“执行函数” -->
    <!-- 
        什么时候使用子传父技术？
        *   当子想要去改变父里的数据
        
        子传父如何实现？
        *   父组件内，给组件@自定义事件=“父methods函数” - 实现逻辑
        *   子组件内，子函数方法里，this.$emit('父组件里的自定义事件名'，子要向父传递的值) - 实现触发

     -->
    <MyProduct
      v-for="(obj, index) in list"
      :key="obj.id"
      :index="index"
      :title="obj.proname"
      :price="obj.proprice"
      :intro="obj.info"
      @subprice="subFn"
    >
    </MyProduct>
  </div>
</template>

<script>
import MyProduct from './components/组件04_MyProduct sub.vue'
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          proname: '超级好吃的棒棒糖',
          proprice: 18.8,
          info: '开业大酬宾, 全场8折',
        },
        {
          id: 2,
          proname: '超级好吃的大鸡腿',
          proprice: 34.2,
          info: '好吃不腻, 快来买啊',
        },
        {
          id: 3,
          proname: '超级无敌的冰激凌',
          proprice: 14.2,
          info: '炎热的夏天, 来个冰激凌了',
        },
      ],
    }
  },
  methods: {
    // 砍价函数
    subFn(index, price) {
      // 短路与 ：妙啊！！！
      // this.list[index].proprice > 1 短路与：作判断，如果价格低于1元就返回false不再执行&&后的代码了，表示不能再砍价了
      this.list[index].proprice > 1 &&
        (this.list[index].proprice = (
          this.list[index].proprice - price
        ).toFixed(2))
    },
  },
  components: {
    MyProduct,
  },
}
</script>
<style scoped></style>
