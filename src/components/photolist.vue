<template>
  <div class="body">
    <div
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
   >
      <div class="mui-scroll">
        <a
          class="mui-control-item"
          :class="[i==0?'mui-active':''] "
          v-for="(item,i) in phototitle"
          :key="item.id"
        @click='huoqu(item.id)' >{{item.title}}</a>
      </div>
    </div>



<ul class="ui-list">
  <li v-for="item in photoji" :key="item.id">
   <router-link  :to=" '/shouye/photoitem/'+item.id">
    <img v-lazy="item.img_url">
    <div class="img_title">
       <p class="img_top">{{item.title}}</p>
       <div class="img_bottom">{{item.zhaiyao}}</div>
    </div>
</router-link>
  </li>
</ul>








  </div>
</template>
<script>
import mui from "../lib/mui/js/mui";

export default {
  data() {
    return {
      phototitle: [],
      photoji:[]
    };
  },
  created() {
    this.getphototitle();
    this.getphotojihe(0)
  },
  methods: {
    getphototitle() {
      this.$http.get("api/getimgcategory").then(result => {
        result.body.message.unshift({ title: "全部", id: 0 });

        this.phototitle = result.body.message;
      });
    },
    getphotojihe(myid){
  
this.$http.get('api/getimages/'+myid).then(result=>{

console.log(result.body)
this.photoji=result.body.message

if(result.body.message.length==0){
   
this.$toast('前三项 暂无数据，请切换')

}



})


    },
    huoqu(myid){
        this.getphotojihe(myid)
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
<style scoped>
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.body{padding: 0 10px}
.ui-list{background: #cccccc;list-style: none;margin: 0;padding: 0;}
img{width: 100%;vertical-align: middle;}
li{text-align: center;margin: 10px 0;box-shadow: 0 0 9px #999;position: relative}
.img_title{position: absolute;bottom: 0px;color: #ffffff;background: rgba(0, 0, 0, 0.4);height: 84px;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;}
.img_top{font-size: 14px;padding: 0;
margin: 0;
text-align: left;
font-weight: bold;color: #ffffff;}
.img_bottom{font-size: 13px;;padding: 0;
margin: 0;
text-align: left;
}

</style>

