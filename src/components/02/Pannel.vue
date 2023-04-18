<template>
  <div>
    <!-- 按钮标题 -->
    <div class="title">
      <h4>芙蓉楼送辛渐</h4>
      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? '收起' : '展开' }}
      </span>
    </div>
    <!-- 下拉内容 -->
    <div class="container" v-show="isShow">

      <!-- 组件插槽
      1.当组件内某一部分标签不确定怎么办？
            用插槽技术
      2.插槽具体如何使用？
            1.先在组件内用slot占位
            2.使用组件时，传入具体标签插入
      3.插槽运行效果？
            传入的标签会替换掉slot显示
      4.如何给插槽设置默认显示的内容？
            在slot标签内设置要显示的内容，
            当使用组件未传值时，显示slot标签里的内容
      5.作用域插槽：
            场景：使用插槽，使用组件内的变量
            1.slot标签,自定义属性和内变量关联
            2.使用组件，template配合v-slot=“变量名”，
              变量名会自动收集slot绑定的属性和值形成对象
      -->
     <!-- <slot>默认显示的内容</slot> -->

     <slot :row="defaultObj">{{ defaultObj.defaultOne }}</slot>
     <!-- <slot :row="isShow">{{ isShow }}</slot> -->

     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      defaultObj:{
        defaultOne:'无名氏',
        defaultTwo:'豪雨'
      },
    }
  },
}
</script>

<style scoped>
h3 {
  text-align: center;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0 1em;
}

.title h4 {
  line-height: 2;
  margin: 0;
}

.container {
  border: 1px solid #ccc;
  padding: 0 1em;
}

.btn {
  /* 鼠标改成手的形状 */
  cursor: pointer;
}

img {
  width: 50%;
}
</style>
