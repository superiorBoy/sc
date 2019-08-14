<template>
    <div class="body">
<div class="top">

        <input type="text" v-model="city" placeholder="请输入城市">
        <button type="button" class="mui-btn mui-btn-success" @click="gettianqi">搜索</button>

</div>


<div v-if="tianqi.length!=0">


<div class="day">
<p>日期:{{tianqi.yesterday.date}} </p>
<p>天气:{{tianqi.yesterday.type}} </p>
<p>气温:{{tianqi.yesterday.high}}--{{tianqi.yesterday.low}} </p>
<p>风向:{{tianqi.yesterday.fx}} </p>

</div>
<hr>

<ul>
<li  v-for="item in tianqi.forecast">

    <p>日期:{{item.date}} </p>
<p>天气:{{item.type}} </p>
<p>气温:{{item.high}}--{{item.low}} </p>
<p>风向:{{item.fengxiang}} </p>
</li>

</ul>

</div>






    </div>
</template>
<script>
export default {
    data(){
        return{
          tianqi:'',
          city:''
        }
    },
    methods: {
        

gettianqi(){

    this.$axios.get('https://www.apiopen.top/weatherApi?city='+this.city).then(res=>{

this.tianqi=res.data.data

        console.log(res.data.data)
    })
    .catch(err=>{
        console.log('加载失败')
    })
}



    },
    
}
</script>
<style lang="scss" scoped>

.top{
display: flex;
justify-content: space-evenly;
margin: 10px 0;

     input{width: 70%;height: 40px;}
button{width: 20%;height: 40px;}   
}
ul{list-style: none;margin: 0;padding: 0;
li{margin: 10px 0;
border: 1px solid #eee;
padding: 5px 10px;}

}
.body{padding: 0 5px;}
.day{box-shadow: 8px 3px 7px #d7d7d7;
padding: 3px 10px;}
hr {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
    color: #fbe3e3;
}
</style>