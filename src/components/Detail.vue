<template>
  <div class="showDetail">
    <div class="opt">
      <router-link to="/" class="back">返回</router-link>
      <button class="del" @click.prevent="deleteInfo">删除</button>
      <router-link :to='"/update/"+this.id' class="update">编辑</router-link>
    </div>
    <div class="row">
      <label>姓名：</label><p>{{user.name}}</p>
    </div>
    <div class="row">
      <label>电话：</label><p>{{user.tel}}</p>
    </div>
    <div class="row">
      <label>地址：</label><p>{{user.addr}}</p>
    </div>
    <div class="row">
      <label>常用交通工具：</label><p>{{user.vehicle}}</p>
    </div>
    <div class="row">
      <label>是否有发热或咳嗽无力等症状：</label><p>{{user.info[0] | toChar(user.info[0])}}</p>
    </div>
    <div class="row">
      <label>14天内是否去过湖北地区：</label><p>{{user.info[1] | toChar(user.info[1])}}</p>
    </div>
    <div class="row">
      <label>14天内是否接触过湖北地区的人员：</label><p>{{user.info[2] | toChar(user.info[2])}}</p>
    </div>
    <div class="row">
      <label>14天内是否接触过发热咳嗽的人员：</label><p>{{user.info[3] | toChar(user.info[3])}}</p>
    </div>
    <div class="row">
      <label>是否被确诊为新冠感染患者：</label><p>{{user.info[4] | toChar(user.info[4])}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      id: this.$route.params.id,
      user: {
        info: []
      }
    }
  },
  methods: {
    // 删除信息
    deleteInfo () {
      let flag = window.confirm('确认删除？')
      if (flag) {
        axios.delete('http://localhost:3000/users/' + this.id).then((res) => {
          if (res.status === 200) {
            setTimeout(() => {
              this.$router.push({path: '/'})
            }, 1000)
          }
        })
      }
    }
  },
  created () {
    // 获取单条详情
    axios.get('http://localhost:3000/users/' + this.id).then((res) => {
      this.user = res.data
    })
  },
  filters: {
    toChar (data) {
      return data === 'true' ? '是' : '否'
    }
  }
}
</script>

<style scoped>
.showDetail{
  max-width: 80%;
  margin: 0 auto;
  font-size: 14px;
  line-height: 24px;
  margin-top: 10px;
}
.row{
  display: block;
}
label{
  display: inline-block;
}
p{
  display: inline-block;
  margin: 10px 0;
}
.opt{
  height: 40px;
  border-bottom: 1px solid #eee;
}
.back, .update, .del{
  display: inline-block;
  width: 50px;
  height: 26px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #444;
  line-height: 26px;
  margin-right: 10px;
  text-align: center;
  box-sizing: border-box;
}
.update{
  float: right;
  background-color: rgb(102, 102, 102);
  color: #fff;
}
.del{
  float: right;
  padding: 0;
  background-color: rgb(218, 55, 55);
  color: #fff;
}
</style>
