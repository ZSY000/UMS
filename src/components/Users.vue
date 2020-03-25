<template>
  <div class="users">
    <input type="text" placeholder="搜索..." v-model="keyword" @input="filterInfo(keyword)">
    <router-link to="/add" class="addBtn">新增用户</router-link>
    <p v-if="!filterInfo(keyword).length" class="tip">您查找的信息不存在！</p>
    <div class="tableInfo">
      <div class="row title" v-if="filterInfo(keyword).length">
        <div>姓名</div>
        <div>电话</div>
        <div>地址</div>
        <div>操作</div>
      </div>
      <div v-for="user in filterInfo(keyword)" :key="user.id" class="row">
        <div>{{user.name}}</div>
        <div>{{user.tel}}</div>
        <div>{{user.addr}}</div>
        <div><router-link :to="'/detail/'+user.id" class="detailBtn">详情</router-link></div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      users: [],
      keyword: '' // 搜索关键字
    }
  },
  methods: {
    // name搜索
    filterInfo (keyword) {
      return this.users.filter((item, index) => {
        return item.name.match(keyword)
      })
    }
  },
  created () {
    axios.get('http://localhost:3000/users').then((res) => {
      this.users = res.data
    })
  }
}
</script>

<style scoped>
.users{
  max-width: 80%;
  margin: 0 auto;
  font-size: 14px;
  line-height: 24px;
}
input[type="text"]{
  display: inline-block;
  height: 30px;
  width: 60%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-left: 10px;
  margin: 10px 0 20px;
}
.addBtn{
  padding: 5px 10px;
  float: right;
  margin-top: 10px;
  background-color: #666;
  border-radius: 5px;
  color: #fff;
}
.tableInfo{
  width: 100%;
  display: table;
}
.row{
  display: table-row;
  text-align: center;
}
.row div{
  display: table-cell;
  width: 25%;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #ddd;
}
.row .detailBtn{
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 12px;
  border-radius: 4px;
  padding: 3px 8px;
  cursor: pointer;
}
.title{
  background-color: rgb(241, 241, 241);
}
</style>
