<template>
   <!-- eventBus技术
   * 什么时候使用eventBus技术？
     当2个没有引用关系的组件之间要通信传值
   * eventBus技术本质是什么？
     空白Vue对象，只负责$on和$emit
  -->
  <div style="overflow: hidden;">
    <div style="float: left">
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
    <div style="float: left">
      <List :arr="list"></List>
    </div>
  </div>
</template>

<script>
import MyProduct from './components/组件04_MyProduct sub.vue'
import List from './components/组件05_List.vue'
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
    List,
  },
}
</script>
<style scoped></style>
