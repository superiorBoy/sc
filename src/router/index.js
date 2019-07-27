import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
Vue.use(Router)
import shouye from '@/components/shouye'
import car from '@/components/car'
import huiyuan from '@/components/huiyuan'
import search from '@/components/search'
import newlist from '@/components/newlist'
import newitem from '@/components/newitem'
import photolist from '@/components/photolist'
import photoitem from '@/components/photoitem'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/shouye/newlist'
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
    {
      path:'/shouye/newlist',
      component:newlist
    },
    {
      path:'/shouye/newitem',
      component:newitem
    },
    {
      path:'/shouye/photolist',
      component:photolist
    },
    {
      path:'/shouye/photoitem/:id',
      component:photoitem
    },
  ],
  linkActiveClass:'mui-active'

})
