<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="reverseBtn">翻转数组</button>
    <button @click="spliceBtn">截取数组</button>
    <button @click="updateBtn">更新数组</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 3, 7, 8, 5],
    }
  },
  methods: {
    // 使原数组发生改变的方法，v-for可以检测到，使页面发生更新
    // 反之，v-for检测不到，页面不发生更新
    reverseBtn() {
      this.arr.reverse()
    },
    spliceBtn(){
      // splice方法会改变原始数组
      this.arr.splice(0,3)
    },
    updateBtn(){
      // 更新数组的某个元素，v-for检测不到页面没有更新
      this.arr[0] = 1000
      // 解决方法：this.$set()
      /**
       * 参数1：目标对象
       * 参数2：更新的位置
       * 参数3：要更新的值
       */
      this.$set(this.arr,0,1000)
    }
  },
}
</script>
<style scoped></style>
