<template>
  <div class="body">


<h3 v-if="video.length==0">正在加载中......</h3>




    <ul>
      <li v-for="item in video" >
          <div class="li_top"> 
                 <div>  <img :src="item.profile_image" alt="">   <div class="name">{{item.name}}</div>        </div>
               <div><span>{{item.passtime}}</span> </div>  
                   </div>
<p>{{item.text}}</p>

<video :src="item.videouri" controls="controls" >
您的浏览器不支持 video 标签。
</video>


      </li>
    </ul>
<div class="center" v-if="video.length!=0">
       <button @click="more" type="button"  class="mui-btn mui-btn-primary mui-btn-outlined" >查看更多</button> </div>
  </div>
</template>
<script>

      var videos = document.getElementsByTagName('video');
            for (var i = videos.length - 1; i >= 0; i--) {
                (function(){
                    var p = i;
                    videos[p].addEventListener('play',function(){
                        pauseAll(p);
                    })
                })()
            }
            function pauseAll(index){
                for (var j = videos.length - 1; j >= 0; j--) {
                    if (j!=index) videos[j].pause();
                }
            };

export default {
  data() {
    return {
      video: [],
      page:1,
      show:true
    };
  },
  methods: {
    getvideo() {
      this.$axios
        .get("https://www.apiopen.top/satinApi?type=4&page="+this.page)
        .then(res => {
          console.log(res.data.data);
          this.video = this.video.concat( res.data.data);
        })
        .catch(err => {
          console.log("请求失败");
        });
    },
    more(){

this.page++;
this.getvideo()


    }
  },
  created() {
    this.getvideo();

  },
  mounted() {



  },
     updated:function(){
          
       var videos = document.getElementsByTagName('video');

    console.log(videos.length)   
            for (var i = videos.length - 1; i >= 0; i--) {
                (function(){
                    var p = i;
                    videos[p].addEventListener('play',function(){
                        pauseAll(p);
                    })
                })()
            }
            function pauseAll(index){
                for (var j = videos.length - 1; j >= 0; j--) {
                    if (j!=index) videos[j].pause();
                }
            };
        },
};






</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0px;
  padding: 0;
}
li {


margin-bottom: 15px;
img{width: 40px;
float: left;
height: 40px;
color: #8f8f94;
border-radius: 50%;}
p{margin: 10px 0}
video{width: 100%;height: 200px;}
}
.li_top{height: 50px;display: flex;

justify-content: space-between;
color: #8f8f94;
align-items: center;
.name{float: left;

line-height: 50px;
font-size: 15px;
margin: 0 9px;}

}
.body{padding: 0 5px;}
.center{text-align: center;
.mui-btn{width: 95%;margin: 15px 0;}
}
</style>
