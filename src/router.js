import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name:'index',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: (resolve) => require(['./views/home.vue'], resolve)
    },
    {
      path: '/list',
      name: 'list',
      component: (resolve) => require(['./views/list.vue'], resolve)
    },
  ]
})
