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
  // 组件缓存下多了两个钩子函数
  // activated - 得到激活状态
  // deactivated - 失去激活状态
  activated() {
    console.log('UserName组件激活')
  },
  deactivated() {
    console.log('UserName组件失去激活')
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scoped></style>
