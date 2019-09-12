import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/LogIn'

const HomePage = () => import('@/pages/homepage.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld,
      step: true
    },
    {
      path: '/home/homePage',
      name: 'HomePage',
      component: HomePage,
      step: true
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      step: true
    }
  ],
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
