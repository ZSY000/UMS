<template>
  <div class="users">
    <input type="text" placeholder="搜索...">
    <router-link to="/add" class="addBtn">新增用户</router-link>

    <div class="tableInfo">
      <div class="row">
        <div>姓名</div>
        <div>电话</div>
        <div>地址</div>
        <div></div>
      </div>
      <div v-for="user in users" :key="user.id" class="row">
        <div>{{user.name}}</div>
        <div>{{user.tel}}</div>
        <div>{{user.addr}}</div>
        <div>详情</div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      users: []
    }
  },
  methods: {

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
}
input[type="text"]{
  display: inline-block;
  height: 30px;
  width: 60%;
  border: 1px solid #ddd;
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
}
.row div{
  display: table-cell;
  width: 25%;
}
</style>
