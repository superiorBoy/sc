// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import home from './components/home'
import router from './router'
import './lib/mui/css/mui.min.css'
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'; 
Vue.config.productionTip = false
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import { Swipe, SwipeItem } from 'mint-ui';
import  VueResource  from 'vue-resource'
Vue.use(VueResource) 
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { home },
  template: '<home/>'
})
