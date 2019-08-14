<template>
  <div class="body">


<div class="top">

        <input type="text" v-model="name" placeholder="请输入歌曲">
        <button type="button" class="mui-btn mui-btn-success" @click="getmusic">搜索</button>

</div>






    <div v-for="item in music" class="list">
      <div class="title">
<div>
        <img :src="item.pic" alt />
</div>
<div class="name">
        <p>歌名：{{item.title}}</p>
        <p>演唱：{{item.author}}</p>
</div>




      </div><div>
 <audio :src="item.url" controls="controls">
Your browser does not support the audio element.
</audio>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
name:'',
music:[]

    };
  },
  methods: {
    getmusic() {
      this.$axios
        .get("https://api.apiopen.top/searchMusic?name="+this.name)
        .then(res => {
          console.log(res.data.result);
          this.music=res.data.result
        })
        .catch(err => {
          console.log("获取失败");
        });
    }
  },

  created() {}
};
</script>
<style lang="scss" scoped>
.title {
display: flex;justify-content: space-between;
height: 100px;

img{width: 100px}
p{line-height: 44px;font-size: 13px;width: 250px;white-space: nowrap;

overflow: hidden;

text-overflow: ellipsis;
}
}
audio{width: 100%;height: 30px;}
.body{padding: 3px 5px;}
.top{
display: flex;
justify-content: space-evenly;
margin: 10px 0;

     input{width: 70%;height: 40px;}
button{width: 20%;height: 40px;}   
}
.list{margin-bottom: 32px;box-shadow: 5px 5px 5px #d0d5a2ed;}
</style>