<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <Pannel>
        <span>图片内容</span>
        <img src="../assets/mmhy.gif" alt="" />
      </Pannel>
      <Pannel>
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </Pannel>
      <Pannel>
        <!-- 需求：使用插槽时，使用组件内变量 -->
        <!-- scope变量：{row:defaultObj} -->
        <template v-slot="scope">
          <p>{{ scope.row.defaultTwo }}</p>
        </template>
      </Pannel>
      <!-- <Pannel
        ><template v-slot="scope1">
          <p>{{ scope1.row }}</p>
        </template></Pannel
      > -->
    </div>
  </div>
</template>

<script>
import Pannel from '../components/02/Pannel.vue'
export default {
  components: {
    Pannel,
  },
}
</script>

<style>
#app {
  width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 4px solid blueviolet;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 1em 2em 2em;
}
</style>
