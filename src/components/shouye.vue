<template >
    <div>
      
<!-- --------------------------轮播图---------------------------------- -->

        <mt-swipe :auto="4000" >
            <!-- <mt-swipe-item v-for='item in lunbotulist':key=item.id> -->

                <!-- <img :src="item.img" alt=""> -->

            <mt-swipe-item ><img src="../img/1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item ><img src="../img/2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item ><img src="../img/3.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item ><img src="../img/4.jpg" alt=""></mt-swipe-item>
          </mt-swipe>
<!-- ___________________________九宫格__________________________________ -->
<ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link  to="/shouye/newlist">
                <img src="../img/new.png" alt="">
                <div class="mui-media-body">新闻资讯</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link  to="/shouye/photolist">
                <img src="../img/tupian.png" alt="">
                <div class="mui-media-body">图片分享</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link  to="/newlist">
                <img src="../img/goumai.png" alt="">
                <div class="mui-media-body">商品购买</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link  to="/newlist">
                <img src="../img/liuyan.png" alt="">
                <div class="mui-media-body">留言反馈</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link  to="/newlist">
                <img src="../img/shipin.png" alt="">
                <div class="mui-media-body">视频专区</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link  to="/newlist">
                <img src="../img/dianhua.png" alt="">
                <div class="mui-media-body">联系我们</div>
            </router-link>
        </li>
     
    </ul> 




    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
export default {
    data(){
        return{
lunbotulist:[]
        }
    },
    created() {
        this.getlunbotu()
    },
    methods:{
getlunbotu(){
    this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result=>{

console.log(result.body)
if(result.body.status==0){
   
  this.lunbotulist=result.body.message

}else{
    Toast('加载失败');
}

   
    })
}

    }

}
</script>






<style  scoped >

.mint-swipe{height: 200px;width: 100%;}
.mint-swipe img{width: 100%;height: 100%;}
.mui-grid-view.mui-grid-9{background: #ffffff;}
.mui-table-view,.mui-grid-view.mui-grid-9 .mui-table-view-cell{border: none;
}
.mui-grid-9 img{width: 60px;height: 60px;}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{font-size: 13px}
 </style>