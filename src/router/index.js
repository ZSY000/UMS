import Vue from 'vue'
import Router from 'vue-router'
import Users from '../components/Users'
import About from '../components/About'
import Add from '../components/Add'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'users',
      component: Users
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    }
  ]
})
