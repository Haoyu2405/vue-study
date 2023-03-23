<template>
  <div>
    <!-- vue控制标签的显示与隐藏 
    v-show和v-if
    区别：
    v-show采用css方式隐藏 -> display:none
    v-if直接从DOM数上移除元素
    -->
    <p v-show="isShow">我是v-show</p>
    <p v-if="isOK">我是v-if</p>

    <!-- 
      v-if还能和v-else配合使用
     -->
    <p v-if="age > 18">成年了</p>
    <p v-else>未成年</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      isOK: true,
      age: 21,
    }
  },
}
</script>
<style scoped></style>
