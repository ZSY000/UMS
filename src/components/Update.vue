<template>
  <div class="update">
    <form action="">
      <label><span>* </span>姓名：</label>
      <input type="text" v-model="user.name">
      <label><span>* </span>电话：</label>
      <input type="text" v-model="user.tel">
      <label><span>* </span>地址：</label>
      <input type="text" v-model="user.addr">

      <label><span>* </span>常用交通工具：</label>
      <select v-model="user.vehicle">
        <option value="无">无</option>
        <option value="电动车">电动车</option>
        <option value="汽车">汽车</option>
        <option value="公交车">公交车</option>
      </select>

      <label><span>* </span>是否有发热或咳嗽无力等症状：</label>
      是<input type="radio" name="q1" value=true v-model="user.info[0]">
      否<input type="radio" name="q1" value=false checked v-model="user.info[0]">

      <label><span>* </span>14天内是否去过湖北地区：</label>
      是<input type="radio" name="q2" value=true v-model="user.info[1]">
      否<input type="radio" name="q2" value=false checked v-model="user.info[1]">

      <label><span>* </span>14天内是否接触过湖北地区的人员：</label>
      是<input type="radio" name="q3" value=true v-model="user.info[2]">
      否<input type="radio" name="q3" value=false checked v-model="user.info[2]">

      <label><span>* </span>14天内是否接触过发热咳嗽的人员：</label>
      是<input type="radio" name="q4" value=true v-model="user.info[3]">
      否<input type="radio" name="q4" value=false checked v-model="user.info[3]">

      <label><span>* </span>是否被确诊为新冠感染患者：</label>
      是<input type="radio" name="q5" value=true v-model="user.info[4]">
      否<input type="radio" name="q5" value=false checked v-model="user.info[4]">

      <p v-if="tip" class="tip">请完善全部信息！</p>
      <p v-if="submitted" class="submitted">修改成功！正在跳转...</p>
      <input type="submit" value="确认修改" @click.prevent="updateInfo" v-if="!submitted">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      id: this.$route.params.id,
      user: {
        name: '',
        tel: '',
        addr: '',
        vehicle: '',
        info: []
      },
      tip: false, // 提示信息
      submitted: false
    }
  },
  methods: {
    // 提交信息
    updateInfo () {
      if (this.user.name === '' || this.user.tel === '' || this.user.addr === '' || this.user.vehicle === '') {
        this.tip = true
        return
      }
      axios.put('http://localhost:3000/users/' + this.id, this.user).then((res) => {
        this.tip = false
        this.submitted = true
        setTimeout(() => {
          this.$router.push({path: '/'})
        }, 3000)
      })
    }
  },
  created () {
    // 获取单条详情
    axios.get('http://localhost:3000/users/' + this.id).then((res) => {
      this.user = res.data
    })
  }
}
</script>

<style scoped>
.update{
  max-width: 80%;
  margin: 0 auto;
  font-size: 14px;
  line-height: 24px;
  margin-top: 10px;
}
span{
  color: #f00;
}
label{
  display: block;
}
input[type="text"],select{
  display: block;
  width: 100%;
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
select{
  display: inline-block;
  width: 300px;
}
input[type="radio"]{
  margin: 0 20px 10px 5px;
}
input[type="submit"]{
  display: block;
  margin: 10px auto;
  padding: 5px 15px;
  background-color: #666;
  border-radius: 5px;
  color: #fff;
  border: none;
}
.tip{
  color: #f00;
  text-align: center;
}
.submitted{
  text-align: center;
  background-color: rgb(255, 244, 183);
  margin: 0;
  height: 40px;
  line-height: 40px;
}
</style>
