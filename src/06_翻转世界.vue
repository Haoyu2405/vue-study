<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="btn">翻转世界</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello,world!',
    }
  },
  methods: {
    btn() {
      // 截取字符串得到数组
      let arr = this.msg.split('')
      // 翻转数组
      arr.reverse()
      // 拼接数组并将结果赋值给this.msg
      this.msg = arr.join('')
      console.log(arr)
    },
  },
}
</script>
<style scoped></style>
