<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll" />
    <button @click="inverse">反选</button>
    <ul>
      <li v-for="(obj, index) in arr" :key="index">
        <input type="checkbox" v-model="obj.c" />
        <span>{{ obj.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: '猪八戒',
          c: false,
        },
        {
          name: '孙悟空',
          c: false,
        },
        {
          name: '唐僧',
          c: false,
        },
        {
          name: '白龙马',
          c: false,
        },
      ],
    }
  },
  methods: {
    // 实现反选功能
    inverse() {
      this.arr.forEach((obj) => (obj.c = !obj.c))
    },
  },
  // 计算属性
  computed: {
    // 全选判断
    isAll: {
      set(val) {
        // forEach遍历数组，将全选和每个小框进行关联
        this.arr.forEach((obj) => (obj.c = val))
      },
      get() {
        // 小框状态 -> 全选状态
        // every方法，判断数组是否有不符合条件的，
        // 有不符合条件的直接返回false，全部符合条件返回true
        return this.arr.every((obj) => obj.c === true)
      },
    },
  },
}
</script>
