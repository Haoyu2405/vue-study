<template>
  <div>
    <!-- 目标: 点击按钮, 改变3个li的顺序, 在头上的就到末尾. -->
    <ul>
      <!-- <li>帅哥</li>
      <li>美女</li>
      <li>程序猿</li> -->
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="btn">走一走</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr:['帅哥','美女','程序猿']
    }
  },
  methods: {
    btn(){
      this.arr.push(this.arr[0])
      this.arr.shift()
    }
  },
}
</script>
<style scoped></style>
