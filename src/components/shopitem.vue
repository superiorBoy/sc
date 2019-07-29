<template>
  <div>
   



   
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

                <span>购买数量：</span>
                <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
                <div class="car">
                <button type="button" class="mui-btn mui-btn-primary">立即购买</button><button type="button" class="mui-btn mui-btn-danger">加入购物车</button></div>
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

export default {
  data() {
    return {
        id:this.$route.params.id,
        lunbolist:[],
        canshu:{}
    }
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
.mint-swipe{height: 200px;width: 100%;}
.mint-swipe img{width: 100%;height: 100%;}
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
</style>

