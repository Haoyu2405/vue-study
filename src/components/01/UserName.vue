<template>
  <div>
    <div>
      <span>用户名：</span>
      <input type="text" name="" id="" />
    </div>
    <div>
      <span>密码：</span>
      <input type="password" name="" id="" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log('UserName组件创建')
  },
  destroyed() {
    console.log('UserName组件销毁')
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scoped></style>
