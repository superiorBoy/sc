<template>
  <div class="body">
      <h3 v-if="music.length==0">正在加载中......</h3>
<div v-for="(item,i) in music" class="tupian">
  <p>{{item.text}}</p>
     <img :src="item.cdn_img=='404 Not Found'?item.image0:item.cdn_img" alt="">

</div>
     
     

<div class="center" v-if="music.length!=0">
    <button @click="more" type="button"  class="mui-btn mui-btn-primary mui-btn-outlined">查看更多</button>
    
    
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      music: [],
      page:1
    };
  },
  created() {
    this.getlunbo();
  },

  methods: {
    getlunbo() {
      this.$axios
        .get("https://www.apiopen.top/satinApi?type=3&page="+this.page)
        .then(res => {
            this.music  = this.music.concat(res.data.data)           ;
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    more(){

this.page++;
this.getlunbo()


    }
  },






  
};
</script>

<style lang="scss" scoped>


.body{padding: 2px 5px;}
.mui-btn{width: 95%;margin: 10px auto;}
.center{text-align: center;}
img{width: 100%}
p{color: #12121a;}
.tupian{border-bottom: 1px bisque solid;margin-bottom: 20px}
</style>