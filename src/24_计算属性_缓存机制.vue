<template>
 <!-- 计算属性的好处是？
  * 带缓存，只要依赖项不变，都直接从缓存取
  * 依赖项改变函数自动自动执行并重新缓存
-->
  <div>
    <p>{{ reverseComputed }}</p>
    <p>{{ reverseComputed }}</p>
    <p>{{ reverseComputed }}</p>
    <p>{{ reverseMethod() }}</p>
    <p>{{ reverseMethod() }}</p>
    <p>{{ reverseMethod() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello,Vue',
    }
  },
  methods: {
    reverseMethod() {
      console.log('函数执行了')
      return this.msg.split('').reverse().join('')
    },
  },
  computed: {
    reverseComputed() {
      console.log('计算属性执行了')
      return this.msg.split('').reverse().join('')
    },
  },
}
</script>
<style scoped></style>
