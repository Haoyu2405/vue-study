<template>
  <div>
    <ul>
      <!-- v-for可以遍历数组、对象、数字
            语法1:
      v-for="(值变量名, 索引变量名) in 目标结构"
      口诀：想要谁循环就放到谁身上
      -->
      <li v-for="(item, index) in arr" :key="index">
        {{ item }} --- {{ index }}
      </li>
    </ul>
     <ul>
      <!-- 语法2：
      v-for="值变量名 in 目标结构"
      -->
      <li v-for="item in stuArr" :key="item.id">
      <span>{{ item.name }}</span>
      <span>{{ item.sex }}</span>
      <span>{{ item.hobby }}</span>
      </li>
     </ul>
     <!-- 语法3：(了解)
    v-for="(value,key) in 对象"
    -->
    <p v-for="(value,key) in tObj" :key="value">
    <span>{{ value }}</span>
    ===
    <span>{{ key }}</span>
    </p>
    <!-- 语法4：(了解)
    v-for="值 in 固定数字"
    -->
    <p v-for="n in count" :key="n">
    <span>{{ n }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['小明', '小欢欢', '大黄'],
      stuArr: [
        {
          id: 1001,
          name: '孙悟空',
          sex: '男',
          hobby: '吃桃子',
        },
        {
          id: 1002,
          name: '猪八戒',
          sex: '男',
          hobby: '背媳妇',
        },
      ],
      tObj: {
        name: '小黑',
        age: 18,
        class: '1期',
      },
      count: 10,
    }
  },
}
</script>
<style scoped></style>
