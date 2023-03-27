<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="obj in list" :key="obj.id">
            <td>{{ obj.id }}</td>
            <td>{{ obj.name }}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <!-- 动态class
            :class="类名:布尔值"
            -->
            <td :class="{ red: obj.price > 100 }">{{ obj.price }}</td>
            <!-- 使用过滤器 -->
            <td>{{ obj.time | formatDate }}</td>
            <td><a href="#" @click="delFn(obj.id)">删除</a></td>
          </tr>
          <!-- 统计有数据时才显示 -->
          <tr style="background-color: #eee" v-if="list.length !== 0">
            <td>统计:</td>
            <td colspan="2">总价钱为: {{ allPrice }}</td>
            <td colspan="2">平均价: {{ svgPrice }}</td>
          </tr>
        </tbody>

        <tfoot v-show="list.length === 0">
          <!-- <tfoot > -->
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline d-flex justify-content-center">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model.number="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="addFn">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
// 目标：侦听list改变 - 同步到本地localStorage里

import moment from 'moment'

export default {
  data() {
    return {
      name: '', // 名称
      price: '', // 价格
      // 本地取出缓存list 逻辑或
      list: JSON.parse(localStorage.getItem('kList')) || [],
    }
  },
  methods: {
    // 增加资产事件
    addFn() {
      // 判断用户输入为空
      // if (this.name.trim().length == 0 || !this.price) {
      if (!this.name.trim() || !this.price) {
        alert('请输入资产名称和价格')
        return
      }

      // 解决bug：无数据新增时this.list.length - 1为负数报错，因此list数组没有数据时需要给id一个固定值
      let id =
        this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 100

      // 把值插入到list数组中
      this.list.push({
        id: id,
        name: this.name,
        price: this.price,
        time: new Date(),
      })
      // 清空输入框
      ;(this.name = ''), (this.price = '')
    },

    // 删除标签
    delFn(id) {
      // 找到要删除标签的索引
      let index = this.list.findIndex((obj) => obj.id === id)
      // 删除标签
      this.list.splice(index, 1)
    },
  },
  filters: {
    formatDate(val) {
      return moment(val).format('YYYY-MM-DD')
    },
  },
  computed: {
    // 计算总价
    allPrice() {
      return this.list.reduce((sum, obj) => (sum += obj.price), 0)
    },
    // 求均价并保留两位小数
    svgPrice() {
      return (this.allPrice / this.list.length).toFixed(2)
    },
  },
  watch: {
    list: {
      immediate: true,
      deep: true,
      handler() {
        //  存入本地
        localStorage.setItem('kList', JSON.stringify(this.list))
      },
    },
  },
}
</script>

<style>
.red {
  color: red;
}
</style>
