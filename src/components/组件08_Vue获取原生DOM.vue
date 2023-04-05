<template>
  <div>
    <!-- <p class="p">class获取原生DOM?</p><br> -->
    <p id="idP">id获取原生DOM?</p>
    <br />
    <p ref="refP">ref获取原生DOM?</p>
    <br />
    <p ref="myP">data改变dom更新是异步的:{{ num }}</p>
    <button @click="addOne">数字+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    Fn() {
      console.log('App.vue调用了fn....')
    },
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
  },
}
</script>
<style scoped></style>
