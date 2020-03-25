import Vue from 'vue'
import Router from 'vue-router'
import Users from '../components/Users'
import About from '../components/About'
import Add from '../components/Add'
import Detail from '../components/Detail'
import Update from '../components/Update'

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
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/update/:id',
      name: 'update',
      component: Update
    }
  ]
})
