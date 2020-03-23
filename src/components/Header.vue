<template>
  <div class="head">
    <h3>彭城码用户管理系统</h3>
    <router-link to="/" class="navi" exact>用户中心</router-link>
    <router-link to="/about" class="navi" exact>关于我们</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.head{
  background-color: #eee;
  height: 50px;
  padding-left: 20px;
}
h3{
  margin: 0;
  color: #444;
  font-weight: normal;
  display: inline-block;
  padding-right: 20px;
  border-right: 1px solid #ddd;
}
.navi{
  display: inline-block;
  margin-left: 10px;
  height: 50px;
  line-height: 50px;
}
.router-link-active{
  color: #222;
}
</style>
