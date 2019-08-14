import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
Vue.use(Router)
import shouye from '@/components/shouye'
import car from '@/components/car'
import tupian from '@/components/tupian'
import search from '@/components/search'
import newlist from '@/components/newlist'
import newitem from '@/components/newitem'
import photolist from '@/components/photolist'
import photoitem from '@/components/photoitem'
import shoplist from '@/components/shoplist'
import shipin from '@/components/shipin'
import shopitem from '@/components/shopitem'
import shopping from '@/components/shopping'
import shoptuwen from '@/components/shoptuwen'
import tianqi from '@/components/tianqi'
import duanzi from '@/components/duanzi'
import nicheng from '@/components/nicheng'
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
      path:'/tupian',
      component:tupian
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
    {
      path:'/shouye/shoplist',
      component:shoplist
    },
    {
      path:'/shouye/shipin',
      component:shipin
    },
    {
      path:'/shouye/shopitem/:id',
      component:shopitem
    },
    {
      path:'/shouye/shoptuwen/:id',
      component:shoptuwen,
      name:'shoptuwen'
    },
    {
      path:'/shouye/shopping/:id',
      component:shopping,
      name:'shopping'
    },
    {
      path:'/shouye/tianqi',
      component:tianqi

    },
    {
      path:'/shouye/duanzi',
      component:duanzi

    },
    {
      path:'/shouye/nicheng',
      component:nicheng

    },
  ],
  linkActiveClass:'mui-active'

})
