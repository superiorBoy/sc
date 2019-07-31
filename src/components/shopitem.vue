<template>
  <div>
   
   <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
    >

        <div class="ball" v-if="flage" ref="ball" ></div>

    </transition>

   <transition
          
    >

        <div class="ball2" v-show="flage" ></div>

    </transition>

   
<!-- 轮播区域 -->

      <div class="mui-card">
			<div class="mui-card-content">
			<div class="mui-card-content-inner">
            <mt-swipe :auto="4000" >
            <mt-swipe-item  v-for="item in lunbolist" :key="item.src"><img :src="item.src" alt=""></mt-swipe-item>
          </mt-swipe>
					</div>
				</div>
			</div>

<!-- 商品加入购物车区域 -->
    
           <div class="mui-card">
				<div class="mui-card-header">{{canshu.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					
             <p class="jia"><span>市场价： <del > ￥{{canshu.market_price}}</del> </span >  销售价： <span class="now">￥{{canshu.sell_price}}</span> </p>

             <div class="shuliang"> <span>购买数量：</span>  <num @getCount="getSelectedCount" :max='canshu.stock_quantity'></num></div>
               
       
                <div class="car">
                <button type="button" class="mui-btn mui-btn-primary">立即购买</button><button type="button" class="mui-btn mui-btn-danger" @click="addcar">加入购物车</button></div>
					</div>
				</div>
		
			</div>

<!-- 参数区域 -->

<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品编号：{{canshu.goods_no}}</p>
                        <p>库存情况：{{canshu.stock_quantity}}件</p>
                        <p>上架时间：{{canshu.add_time| dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <button type="button" class="mui-btn mui-btn-primary mui-btn-outlined" @click='tuwen(id)'>图文介绍</button>
                    <button type="button" class="mui-btn mui-btn-danger mui-btn-outlined" @click='pinglun(id)'>商品评论</button>
                    </div>
			</div>



  </div>
</template>
<script>
import mui from '../lib/mui/js/mui'
import num from './num'
export default {
  data() {
    return {
        id:this.$route.params.id,
        lunbolist:[],
        canshu:{},
          flage: false,
            SelectedCount:1//保存用户选择的商品数量 默认 认为用户买一个
    }
  },
  components:{
    num
  },
  methods: {

getlunbo(){
    this.$http.get('api/getthumimages/'+this.id).then(result=>{
                  this.lunbolist=result.body.message
                 console.log(result.body)
           })
},


getcanshu(){
    this.$http.get('api/goods/getinfo/'+this.id).then(res=>{

    this.canshu=res.body.message[0]


    })
},
tuwen(id){

    this.$router.push({name:'shoptuwen',params:{id}})
},
pinglun(id){
     this.$router.push({name:'shopping',params:{id}})
},
addcar(){
   this.flage = !this.flage;

// 拼接出一个要保存到store中car 数组里的商品信息对象
var goodsinfo ={
  id:this.id,
  count:this.SelectedCount,
  price:this.canshu.sell_price,
  selected:true
};

//调用store中的mutations来将商品加入购物车
this.$store.commit('addToCar',goodsinfo)

},
 //钩子函数的第一个参数el:表示要执行动画的那个元素 是个原生的js dom对象
            //document.getElementById() 可以认为他是通过这种方式获取的
            beforeEnter:function (el) {
                //beforeEnter表示动画入场之前 动画开始 可以再beforeEnter中设置元素的起始样式
                //设置小球开始动画以前的起始位置
                el.style.transform="translate(0,0)";

            },
            enter:function (el,done) {
                //这句话没有实际的作用 但是不写出不来效果
                //el.offsetWidth可以认为可以强制刷新动画

                el.offsetWidth
                //enter表示动画开始之后的样式这里可以设置小球完成动画之后的结束状态
          //获取小球的 在页面中的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();//小球在页面中的位置
            const badgePosition = document.getElementById('badge').getBoundingClientRect();//徽标在页面中的位置
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top
            el.style.transform = `translate(${xDist}px,${yDist}px)`;
            el.style.transition = 'all 0.3s cubic-bezier(.4,-0.3,1,.68)';
              el.addEventListener('transitionend',done)
              // done()
 
            },
            afterEnter:function (el) {
                //动画完成后
                this.flage=!this.flage;

            },


       getSelectedCount(count){
            //当子组件把选中的数量 传递给 父组件的时候，把选中的值保存到data上
            this.SelectedCount = count;

            console.log('父组件接收的' + this.SelectedCount)
           
        }

  },
     created() {
      this.getlunbo();
      this.getcanshu();
      
  },
  mounted() {
    mui(".mui-numbox").numbox();


  },
};
</script>
<style lang="scss" scoped>

p{margin-bottom: 0px;}
.mint-swipe{height: 200px;width: 100%;text-align: center;}
.mint-swipe img{height: 100%;}
.jia{font-size: 13px;color: gray; margin: 10px 0;
.now{color: red;font-weight: bold;}
}
.car{margin: 10px 0;
  button{margin: 0 5px;}
}
.mui-card-footer{
    display: block;
    button{width: 100%;margin: 10px 0;}
}
    .ball {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            z-index: 99;
            position: absolute;
            top: 400px;
            left: 143px;
      
  
        }
        .shuliang{display: flex;align-items: center;}
</style>

