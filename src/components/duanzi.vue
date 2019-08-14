<template>
    <div class="body">
     <h3 v-if="duanzi.length==0">正在加载中......</h3>

<div v-for="item in duanzi" class="list">
   <div class="li_top"> 
                 <div>  <img :src="item.profile_image" alt="">   <div class="name">{{item.name}}</div>        </div>
               <div><span>{{item.passtime}}</span> </div>  
                   </div>

       <div class="neirong">          
{{item.text}}
</div>  
</div>







<div class="center" v-if="duanzi.length!=0">
    <button @click="more" type="button"  class="mui-btn mui-btn-primary mui-btn-outlined">查看更多</button>
    
    
    </div>
    </div>
</template>
<script>
export default {
     data(){
        return{
duanzi:[],
page:1
        }
    },
    methods: {
        getduanzi(){
            this.$axios.get('https://www.apiopen.top/satinApi?type=2&page='+this.page).then(res=>{
                console.log(res.data.data)

               this.duanzi= this.duanzi.concat(res.data.data)  

            })
            .catch(err=>{
                console.log(err)
            })
        },
        more(){
            this.page++;
            this.getduanzi()
        }
    },
    created() {
        this.getduanzi()
    },
}
</script>
<style lang="scss" scoped>
    .center{text-align: center;}
    button{width: 95%}
    .li_top{height: 50px;display: flex;
margin: 10px 0;
justify-content: space-between;
color: #8f8f94;
align-items: center;
.name{float: left;
white-space: nowrap;

overflow: hidden;

text-overflow: ellipsis;

width: 118px;
line-height: 50px;

margin: 0 9px;}
img{width: 40px;
float: left;
height: 40px;
color: #8f8f94;
border-radius: 50%;}
}
.list{font-size: 16px;

color: #807b7b;

margin: 10px 0;

box-shadow: 5px 5px 5px #f4dfdf;

padding: 2px 6px;

box-sizing: border-box;}
.body{padding: 3px 5px}
.neirong{margin-bottom: 10px;}
</style>