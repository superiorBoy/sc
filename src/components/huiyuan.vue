<template>
  <div class="body">


      <h2>个性昵称</h2>

    <ul>
     
      <li v-for="(item,i) in music">
       {{i+1}}&#8195{{item.femalename}}
      </li>
    </ul>
<div class="center">
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
        .get("https://www.apiopen.top/femaleNameApi?page="+this.page)
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
h2{text-align: center;color: #805207;margin: 15px 0}
ul{list-style: none;margin: 0;padding: 0;}
li{height: 40px;line-height: 40px;box-shadow: 2px 2px 2px #eeeeee;color: gray;

font-size: 15px;}
.body{padding: 2px 5px;}
.mui-btn{width: 95%;margin: 10px auto;}
.center{text-align: center;}
</style>