import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pase/home'
import One from '@/pase/1'
import Tow from '@/pase/3'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
      {
          path: '/one',
          name: 'one',
          component: One
      },
      {
          path: '/tow/:id/:noe',
          name: 'tow',
          component: Tow
      }


  ]
})
