<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
  border: 0;
}
a{
  color: #444;
  font-size: 14px;
  text-decoration: none;
}
</style>
