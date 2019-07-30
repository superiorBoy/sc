<template >
    <div class="bodyhome">


   <mt-header fixed title="我的">
            <router-link v-show="isBack" to slot="left" >
                <mt-button icon="back" @click="prevWeb">返回</mt-button>
            </router-link>
        </mt-header>


<!-- 点击切换区域 -->

<transition  mode="out-in">



<router-view></router-view>

</transition>





	<nav class="mui-bar mui-bar-tab">
			<router-link  class="mui-tab-item-add " to="/shouye">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-add" to="/huiyuan">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-add" to="/car">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id ='badge'>{{$store.getters.getallcount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-add" to="/search">
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
  prevWeb() {
                this.$router.go(-1);
            }
},
created() {

},
components:{
tabbar
},
     computed: {
            // 顶部的浏览器是否返回
            isBack() {
                // 如果路由地址不是 /home 就出现返回按钮
                return this.$route.path != "/shouye";
            }
        }


})

</script>
<style  >
.bodyhome{padding-top: 40px;background-color: #ffffff ;overflow-x: hidden;padding-bottom: 50px;}
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

.mui-bar-tab .mui-tab-item-add {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-add.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-add .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-add .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mint-header{z-index: 99 !important;}
</style>
