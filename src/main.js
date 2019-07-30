// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import home from './components/home'
import router from './router'
import './lib/mui/css/mui.min.css'

import Mint from 'mint-ui';
Vue.use(Mint);
// import { Lazyload } from 'mint-ui';

// Vue.use(Lazyload);
import 'mint-ui/lib/style.css'; 
Vue.config.productionTip = false
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import { Swipe, SwipeItem } from 'mint-ui';
import  VueResource  from 'vue-resource'
Vue.use(VueResource) 
import VuePreview from 'vue-preview'

Vue.use(VuePreview)
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.http.options.root='http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true;
// 导入时间插件
import moment from 'moment'
// 定义全局的过滤器、

Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
return moment(dataStr).format(pattern)

})

//每次刚进入网站的时候，会调用main.js，先从本地存储中把购物车数据读出来 将字符串转成json对象。 ,没有则为空
var car =JSON.parse(localStorage.getItem('car') || '[]')



var store = new Vuex.Store({
state:{
car:car                 //放入商品id  价格 数量   是否被选中状态

},
mutations:{

addToCar(state,goodsinfo){

var flag=false     //添加标识符，判断购物车是否有此项

state.car.some(item => {      //从car数组中查找
if(item.id==goodsinfo.id){    //如果购物车中有此项
item.count+=parseInt(goodsinfo.count)    //直接增加数量，   转化为数字

flag=true  //标示为已找到
return true  //终止操作
}
})

//如果最终得到的flag还是false,则把商品push到购物车中
if(!flag){

state.car.push(goodsinfo)
}
//当更新car之后，把car数组存储到本地的localStorage中()将对象、数组转换成字符串
localStorage.setItem('car',JSON.stringify(state.car))

}



},
getters:{

getallcount(state){
  var c =0;
  state.car.forEach(item=>{

    c+=item.count
  })
  return c
}

}


})






Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { home },
  template: '<home/>',
  store //挂在store状态管理对象
})
