<template>
  <div>
    <p>2.使用axios发起请求</p>
    <button @click="getAll">点击-查看控制台</button>
    <hr />
    <!-- 查找书籍 -->
    <div>
      <input
        type="text"
        placeholder="请输入要查找的书籍 "
        autofocus
        v-model="bName"
      />
      <button @click="FindFn">搜索</button>
    </div>
    <hr />
    <!-- 添加书籍 -->
    <input type="text" placeholder="书名" v-model="bookObj.bookname" /><br />
    <input type="text" placeholder="出版社" v-model="bookObj.publisher" /><br />
    <input type="text" placeholder="作者" v-model="bookObj.author" /><br />
    <button @click="AddFn">添加</button>
  </div>
</template>

<script>
import axios from 'axios'
// axios配置基地址(全局配置),axios会自动拼接基地址和下面的url接口
axios.defaults.baseURL = 'http://123.57.109.30:3006'

export default {
  data() {
    return {
      bName: '',
      bookObj: {
        bookname: '',
        author: '',
        publisher: '',
      },
    }
  },
  methods: {
    getAll() {
      axios({
        url: '/api/getbooks',
        method: 'GET',
      }).then((res) => {
        console.log(res)
      })
    },
    FindFn() {
      axios({
        url: '/api/getbooks',
        method: 'GET',
        params: {
          bookname: this.bName,
        },
      }).then((res) => {
        console.log(res)
      })
    },
    AddFn() {
      axios({
        url: '/api/addbook',
        method: 'post',
        data: {
          ...this.bookObj
          // 同名，扩展运算符...this.bookObj等同于下列的写法 
          // bookname: this.bookObj.bookname,
          // author: this.bookObj.author,
          // publisher: this.bookObj.publisher,
        },
      }).then((res) => {
        console.log(res)
      })
    },
  },
}
</script>
<style scoped></style>
