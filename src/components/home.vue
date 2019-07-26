<template >
    <div class="body">

<mt-header fixed title="我的商城"></mt-header>



<!-- 点击切换区域 -->

<transition  mode="out-in">



<router-view></router-view>

</transition>





	<nav class="mui-bar mui-bar-tab">
			<router-link  class="mui-tab-item " to="/shouye">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/huiyuan">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/car">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    </div>
</template>
<script>
    import tabbar from './tabbar.vue'
export default({
  name: 'home',
data() {
    return {
        
    }
},
methods: {

},
created() {

},
components:{
tabbar
}


})

</script>
<style >
.body{padding-top: 40px;background-color: #ffffff ;overflow-x: hidden}
body{ background-color: #ffffff;}
.v-enter
{
	opacity: 0;
	/* transform: 100px; */
	transform: translateX(100%)
}
.v-leave-to{
	opacity: 0;
	/* transform: 100px; */
	transform: translateX(-100%)
}
.v-enter-active,.v-leave-active{
	transition: all 0.2s ease;
}

</style>
