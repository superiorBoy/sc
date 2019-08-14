<template>
  <div class="body">


<p v-show="!xianshi" class="kong">商品为空</p>


    <div class="mui-card"v-for="(item,i) in goodlist" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner" >

          <mt-switch v-model="$store.getters.getgoodsselected[item.id]"
          @change="selectedchanged(item.id,$store.getters.getgoodsselected[item.id])"
          
          ></mt-switch>

          <img :src="item.thumb_path" alt />

          <div class="shanchu">
            <h3>{{item.title}}</h3>
            <p class="bottom">
              <span class="jia">￥{{item.sell_price}}</span>

              <shopnum class="shuzi" :initcount='$store.getters.getgoodscount[item.id]' :goodsid="item.id"></shopnum>

              <span class="del" @click="remove(item.id,i)">删除</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 价格结算 -->
    <div class="mui-card" v-show="xianshi">
      <div class="mui-card-content">
        <div class="mui-card-content-inner mui-card-content-inner2">
<div class="left">
<p>总计(不包含运费)</p>
<p>已勾选商品：<span>{{$store.getters.getgoodszonghe.count}}</span> 件，总价：<span>￥{{$store.getters.getgoodszonghe.amout}}</span>  </p>
</div>

<div class="right">
<button type="button" class="mui-btn mui-btn-danger" @click="jiesuan">去结算</button>
</div>

        </div>
      </div>
    </div>


  </div>
</template>
<script>
import shopnum from "./shopnum";
export default {
  data() {
    return {
      goodlist: [],
      xianshi:true
    };
  },
  created() {
    this.getgoodlist();
  },

  methods: {
    // 获取store中所有商品，然后拼接出一个用逗号分隔的字符串
    getgoodlist() {
      var idarr = [];
      this.$store.state.car.forEach(item => 
        idarr.push(item.id)
      );
      //如果没有商品则直接返回，否则会报错



      if (idarr.length <= 0) {


        this.xianshi=false;

 this.$toast('暂无商品');
        return;
      }

      this.$http.get("api/goods/getshopcarlist/" + idarr.join(",")) .then(retult => {
        
       
          this.goodlist = retult.body.message;
        });
    },

//删除数据
remove(id ,index){

this.goodlist.splice(index,1);
this.$store.commit('removefromcar',id)

if(this.$store.state.car.length<=0){
   this.$toast('暂无商品');
           this.xianshi=false;
}


// console.log(this.$store.state.car.length)
},
selectedchanged(id,val){

//每当点击后开关，把最新的开关状态同步到store中
// console.log(id + '------'+ val)
this.$store.commit('updatagoodsselected',{id,selected:val})
},
jiesuan(){
  this.$toast('余额不足')
}



  },
  components: {
    shopnum
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 60px;
  height: 60px;
  padding: 3px;
}
.mui-card-content-inner {
  display: flex;
  align-items: center;

  .shuzi {
    display: inline;
  }

  h3 {
    font-size: 13px;
    margin-bottom: 6px;
  }
}
.mui-card-content-inner {
  padding: 10px 5px;
}
.jia {
  color: red;
}
.del {
  color: #2222ff;
}
.body {
  background: #eeeeee;
  overflow: hidden;
}
.bottom{
    display: flex;
justify-content: space-evenly;
align-items: center;
width: 233px;
}
.mui-card-content-inner2{display: flex;
justify-content: space-around;}
.left{


  span{color: red;}
}
.kong{text-align: center;color: chocolate;}
</style>

