<template>
  <div>
    <span>来自:</span>
    <!-- 下拉菜单要绑定在select上 -->
    <select v-model="from">
      <option value="揭阳">揭阳</option>
      <option value="佛山">佛山</option>
      <option value="东莞">东莞</option>
    </select>

    <!-- (重要) 
    遇到复选框：v-model的变量值
    非数组  - 关联的是复选框的checked属性
    数组   - 关联的是复选框的value属性
    -->
    <div>
      <span>爱好:</span>
      <input type="checkbox" v-model="hobby" value="看书"/>看书
      <input type="checkbox" v-model="hobby" value="学习"/>学习
      <input type="checkbox" v-model="hobby" value="写代码"/>写代码
    </div>

    <!-- 单选框 -->
    <div>
      <span>性别:</span>
      <input type="radio" value="男" name="sex" v-model="gender">男
      <input type="radio" value="女" name="sex" v-model="gender">女
    </div>
    <span>自我介绍</span>
    <textarea v-model="intro"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: '',
      hobby:[],
      gender:'',
      intro:''
    }
  },
}
</script>
<style scoped></style>
