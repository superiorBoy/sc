<template>
  <div class="goodsinfo-container">
    <transition
    @before-enter="beforeEnter" 
    @enter="enter"
    @after-enter="afterEnter">
        
        <div class="ball" v-if="flag" ref="ball"></div>
        
        
        
    </transition>
    
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">

        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">000000</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p class="price">
                市场价:<del>￥0000000</del>&nbsp;&nbsp; 销售价 <span class="now_price">￥0000000</span>
                
            </p>
            <p>购买数量：</p>
            <p>
                <mt-button type="primary" size="small">立即购买</mt-button>
                <mt-button type="danger" size="small" @click="addToShopCar">
                    <span class="mui-icon-extra mui-icon-extra-cart">
                    </span>
                    加入购物车
                </mt-button>
                <!-- 分析：如何实现加入购物车 拿到选择的数量 -->
                <!-- 1.经过分析发现：按钮属于goodsinfo 页面 数字 属于 numberbox 组件 -->
                <!-- 2.由于涉及到了父子组件嵌套了，所以 无法直接在goodsinfo 页面中 获取到选择的商品数量值 -->
                <!-- 3.如何解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
                <!-- 4.事件调用的本质：父向子传递方法，子调用这个方法，同时把数据当作参数 传递给这个方法 -->
            </p>
        </div>
      </div>
      
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <p>商品货号：000000</p>
        <p>库存情况：0000000</p>
        <p>上架时间：0000000</p>
      </div>
      <div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="goDese(id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
//导入轮播图组件
// import swiper from '../subcomponents/swiper.vue'
//导入数字选择框
// import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
    data(){
        return {
        
            flag:false, //小球标识符
        
        }
    },

    methods:{
      
      
      
        addToShopCar(){
            //添加到购物车
            this.flag = !this.flag;
            //拼接出一个要保存到store中的car对象
         
     
        },
        beforeEnter(el){
            el.style.transform = "translate(0, 0)"
        },
        enter(el,done){
            el.offsetWidth;
  
            el.style.transform = 'translate(150px,150px)';
            el.style.transition = 'all 0.5s cubic-bezier(.4,-0.3,1,.68)';
         el.addEventListener('transitionend',done)
        },
        afterEnter(el){
             this.flag = !this.flag;
            
        },
 
    },

}
</script>

<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
    .now_price{
        color:#f40;
        font-size: 14px;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
        button{
            margin:15px 0;
        }
    }
    .mui-card-content{
        p{
            margin-left:15px;
        }
        
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius:50%;
        background-color: red;
        position: absolute;
        top: 220px;
        left: 163px;
        z-index: 99;
       
    }
    .mui-icon-extra{
        font-size: 17px;
    }
}
</style>