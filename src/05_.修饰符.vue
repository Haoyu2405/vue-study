<template>
  <!-- .修饰符
  .stop 阻止事件冒泡
  .prevent阻止默认行为
  .once使函数只执行一次
  -->
  <div @click="FatherFn">
    <!-- 鼠标事件 -->
    <p @click="oneFn">事件冒泡</p>
    <p @click.stop="oneFn">.stop 阻止事件冒泡</p>
    <a :href="url" @click="btn">跳转到百度</a>
    <hr />
    <a :href="url" @click.prevent="btn">.prevent阻止跳转到百度</a>
    <p @click.once="twoFn">.once使twoFn只执行一次但不影响事件的触发</p>
    <hr>
    <hr>
    <!-- 键盘事件 -->
    <input type="text" @keydown.esc="escFn">
    <input type="text" @keydown.enter="enterFn">
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'http://www.baidu.com',
    }
  },
  methods: {
    FatherFn() {
      console.log('这是FatherFn')
    },
    oneFn() {
      console.log('这是oneFn')
    },
    twoFn() {
      console.log('这是twoFn,因为.once只执行一次')
    },
    btn() {
      console.log('跳转到百度')
    },
    escFn(){
      console.log('用户按下esc键');
    },
    enterFn(){
      console.log('用户按下enter键');
    }
  },
}
</script>
<style scoped></style>
