<template>
  <div>
    <!-- <h1>生命周期</h1>
    <Life></Life> -->
    <hr />
    <UseAxios></UseAxios>
    <hr />
    <!-- <hqDOM></hqDOM> -->
    <hqDOM ref="hq"></hqDOM>
  </div>
</template>

<script>
// import Life from './components/组件06_Life.vue'
import UseAxios from './components/组件07_UseAxios.vue'
import hqDOM from './components/组件08_Vue获取原生DOM.vue'

export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {
    console.log(document.getElementById('idP'))
    // console.log(document.getElementsByClassName('#P')) // 获取不到
    console.log(this.$refs.refP)

    // 通过ref属性获取组件对象，然后调用方法（非主流的子传父）
    let obj = this.$refs.hq
    console.log(obj.Fn());
  },
  
  components: {
    // Life,
    UseAxios,
    hqDOM,
  },
}
</script>
<style scoped></style>
