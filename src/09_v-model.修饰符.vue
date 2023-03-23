<template>
  <div>
    <!-- .number修饰符 - 把值转换成数值类型 -->
    <div>
      <span>年龄</span>
      <input type="number" v-model.number="age" />
    </div>
    <!-- .trim修饰符 - 去掉首尾空格 -->
    <div>
      <span>人生格言</span>
      <input type="text" v-model.trim="motto">
    </div>
    <!-- .lazy修饰符 - 内容改变且失去焦点时（onchange事件），把内容同步给v-model的变量 -->
    <div>
      <span>个人简介</span>
      <textarea v-model.lazy="intro"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age:'',
      motto:'',
      intro:''
    }
  },
}
</script>
<style scoped></style>
