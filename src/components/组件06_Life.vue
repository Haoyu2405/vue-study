script
<template>
  <div>
    <p id="myP">钩子函数</p>
    <ul id="myUl">
      <li v-for="(val, index) in arr" :key="index">
        {{ val }}
      </li>
    </ul>
    <button @click="arr.push(1000)">新增元素</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'zxlml',
      arr: [5, 7, 3, 8],
    }
  },
  methods: {},
  // 一、初始化
  // data和methods初始化之前
  // 使用较少
  beforeCreate() {
    console.log('beforeCreate --- 执行')
    console.log(this.msg)
  },

  // data和methods初始化之后
  // 场景：发送网络请求，注册全局事件
  created() {
    console.log('created --- 执行')
    console.log(this.msg)
  },

  // 二、挂载
  // 真实DOM挂载之前
  // 场景：预处理data，不会触发updated钩子函数
  beforeMount() {
    console.log('beforeMount --- 执行')
    console.log(document.querySelector('#myP'))

    this.msg = '重新值'
  },
  // 真实DOM挂载以后
  // 场景：挂载后获取真实DOM
  mounted() {
    console.log('beforeMount --- 执行')
    console.log(document.querySelector('#myP'))
  },

  // 三、更新
  // 前提：data数据改变才执行
  // 更新之前
  beforeUpdate() {
    console.log('beforeUpdate --- 执行')
    console.log(document.querySelectorAll('#myUl>li')[4])
  },
  // 更新之后
  // 场景：获取更新后的真实DOM
  updated() {
    console.log('updated --- 执行')
    console.log(document.querySelectorAll('#myUl>li')[4])
  },

  // 四、销毁
  // 手动消除定时器，计时器，全局事件
  beforeDestroy() {},
  destroyed() {},
}
</script>
<style scoped></style>
