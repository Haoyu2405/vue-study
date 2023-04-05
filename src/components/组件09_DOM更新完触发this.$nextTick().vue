<template>
  <div>
    <!-- <p ref="myP">data改变dom更新是异步的:{{ num }}</p>
    <button @click="addOne">数字+1</button>
    <br> -->
    <input ref="myIpt" placeholder="请输入搜索内容" v-if="isShow" />
    <button @click="search" v-else>点击搜索</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      isShow: false,
    }
  },
  methods: {
    addOne() {
      this.num++
      // vue监测数据更新，开启一个DOM更新队列（异步任务）
      // console.log('data改变，dom更新是异步的');
      // console.log(this.$refs.myP.innerHTML);

      // 原因：vue更新dom异步
      // 解决：this.$nextTick()
      // 过程：DOM更新完会挨个触发$nextTick里的函数体
      this.$nextTick(() => {
        console.log('data改变，dom更新是异步的')
        console.log(this.$refs.myP.innerHTML)
      })
    },
    async search() {
      this.isShow = true
      // this.$refs.myIpt.focus()
      // 原因：data改变dom更新是异步的，点击按钮输入框还没挂载到真实dom上，
      // 因此会报错
      // 解决办法：this.$nextTick()
      // this.$nextTick(() => {
      //   this.$refs.myIpt.focus()
      // })
      // 因为this.$nextTick返回promise对象，因此可将上面代码用async/await改写：
      await this.$nextTick()
      this.$refs.myIpt.focus()
    },
  },
}
</script>
<style scoped></style>
