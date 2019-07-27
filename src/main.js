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
Vue.http.options.root='http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true;
// 导入时间插件
import moment from 'moment'
// 定义全局的过滤器、

Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
return moment(dataStr).format(pattern)

})




Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { home },
  template: '<home/>'
})
