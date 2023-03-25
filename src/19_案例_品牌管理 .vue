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
            <td>{{ obj.time }}</td>
            <td><a href="#" @click="delFn(obj.id)">删除</a></td>
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
// 新增品牌
// 给“添加资产”按钮绑定点击事件
// v-model数据双项绑定
export default {
  data() {
    return {
      name: '', // 名称
      price: '', // 价格
      list: [
        { id: 100, name: '外套', price: 199, time: new Date('2010-08-12') },
        { id: 101, name: '裤子', price: 34, time: new Date('2013-09-01') },
        { id: 102, name: '鞋', price: 25.4, time: new Date('2018-11-22') },
        { id: 103, name: '头发', price: 19900, time: new Date('2020-12-12') },
      ],
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
}
</script>

<style>
.red {
  color: red;
}
</style>
