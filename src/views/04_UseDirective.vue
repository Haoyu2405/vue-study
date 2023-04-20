<template>
  <div>
    <!-- <input type="text" v-gfocus /> -->
    <input type="text" v-focus />
    <p v-color="'red'">改变字体颜色</p>
  </div>
</template>

<script>
// 自定义指令：
// 全局 / 局部
// 全局：
// Vue.directive('gfocus',{
//   inserted(el){
//    el.focus(); // 自动聚焦事件
//   }
// })
// 局部：
// directives:{
//     focus:{
//       inserted(el){
//         // console.log(el);
//         el.focus()
//       }
//     }
//   }
export default {
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      },
    },
    color: {
      // inserted：指令所在标签，被插入到网页上触发
      // update：指令对应数据、标签更新时触发
      inserted(el, binding) {
        console.log(binding)
        el.style.color = binding.value
      },
      update(el, binding) {
        el.style.color = binding.value
      },
    },
  },
}
</script>
<style scoped></style>
