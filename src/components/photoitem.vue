<template>

<div class="body">

        <p class="title">{{item.title}} </p>
<p class="time"><span>发表时间：{{item.add_time |dateFormat}}</span> 点击次数:{{item.click}}次</p>
<hr>

<!-- 使用图片预览 -->

<div class="thumbs">
        <vue-preview :slides="this.images" @close="handleClose"></vue-preview>    

        </div>


<div class="content" v-html="item.content">

</div>
<pinglun :id="this.id"></pinglun>

    </div>
</template>
<script>
import pinglun from './pinglun'
export default {
    data(){
        return{
            id:this.$route.params.id,
            item:{},
            images:[]
        }
    },
    created(){
this.getphoto_item();
this.getthumimages()
    },
 components:{
     pinglun
 },
    methods:{
        getphoto_item(){
            this.$http.get('api/getimageInfo/'+this.id).then(result=>{
this.item=result.body.message[0]
                console.log(result.body)
            })
        },
        handleClose () {  //加上这个方法
                console.log('close event')
            },
        getthumimages(){
            this.$http.get('api/getthumimages/'+this.id).then(res=>{
                console.log(res.body)


res.body.message.forEach(item => {
    item.w=600;
    item.h=400;
     item.msrc=item.src; 
});
                this.images=res.body.message
            })
        }
    }
}
</script>
<style lang="scss"  scoped>

//   @import 'static/scss/common.scss';
.body{padding: 0 4px;}
.title{text-align: center;font-size: 15px;color: #2222aa;margin: 15px 0;}
.time{font-size: 13px;display: flex;justify-content:  space-between;}
.content{font-size: 13px;line-height: 30px;}
 .thumbs{
         /deep/ .my-gallery{   //deep深层作用选择器
              display: flex;
              flex-wrap:wrap;//默认换行
              figure{
                  width: 30%;  
                  margin: 5px; 
                  img{
                      width: 100%;
                      box-shadow: 0 0 8px #999;  
                      border-radius: 5px;
                  }
              }
          }
        } 

</style>
