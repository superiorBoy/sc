import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
Vue.use(Router)
import shouye from '@/components/shouye'
import car from '@/components/car'
import huiyuan from '@/components/huiyuan'
import search from '@/components/search'
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/shouye'
    },
    {
      path:'/car',
      component:car
    },
    {
      path:'/shouye',
      component:shouye
    },
    {
      path:'/huiyuan',
      component:huiyuan
    },
    {
      path:'/search',
      component:search
    },
  ],
  linkActiveClass:'mui-active'

})
