<template>
  <div>
<!-- <p class="p">class获取原生DOM?</p><br> -->
<p id="idP">id获取原生DOM?</p><br>
<p ref="refP">ref获取原生DOM?</p>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    Fn(){
      console.log('App.vue调用了fn....');
    }
  },
  
}

</script>
<style scoped>
</style>
