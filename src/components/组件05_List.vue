<!-- eslint-disable vue/no-mutating-props -->
<template>
  <!-- eventBus技术
   * 什么时候使用eventBus技术？
     当2个没有引用关系的组件之间要通信传值
   * eventBus技术本质是什么？
     空白Vue对象，只负责$on和$emit
  -->
  <ul class="my-product">
    <li v-for="(item, index) in arr" :key="index">
      <span>{{ item.proname }}</span>
      <span>{{ item.proprice }}</span>
    </li>
  </ul>
</template>

<script>
// 目标：跨组件传值
// 1.引入空白vue对象（EventBus）
// 2.接收方 - $on监听事件
import EventBus from '../EventBus/index.js'
export default {
  props: ['arr'],
  // 3.组件创建完毕，监听send事件
  created() {
    EventBus.$on('send', (index, price) => {
    this.arr[index].proprice > 1 &&
        (this.arr[index].proprice = (
          this.arr[index].proprice - price
        ).toFixed(2))
     
    })
  },
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
