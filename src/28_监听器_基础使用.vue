<template>
  <div>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {},
  // 监听器
  // 使用watch配置项，key是要监听的data/computed属性名
  watch: {
    // name -> 要监听的属性名
    // newVal -> 新的值
    // oldVal -> 旧的值
    name(newVal, oldVal) {
      console.log(newVal, oldVal)
    },
  },
}
</script>
<style scoped></style>
