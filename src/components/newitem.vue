<template>
    <div class="body">

        <h3 class="newtitle">{{newitem.title}}</h3>

<p class="newp"><span class="time">发表时间：{{newitem.add_time |dateFormat}}</span> <span class="click">点击次数：{{newitem.click}}次</span> </p>

<hr>
<div class="bodytext" v-html="newitem.content">


</div>
<pinglun :id="this.id"></pinglun>

    </div>
</template>
<script>
  import { Toast } from 'mint-ui';
  import pinglun from './pinglun'
export default {
    data(){
        return{
id:this.$route.query.id,
newitem:{}
        }
    },
    methods:{
getnewitem(){

    this.$http.get('api/getnew/'+this.id).then(res=>{

console.log(res.body)

        if(res.body.status==0){
            this.newitem=res.body.message[0]
        }else{
              Toast('加载失败');
        }
    })
}
    },
 components:{
     pinglun
 },


created() {
this.getnewitem()
},

}
</script>
<style scoped>
.body{padding: 0 4px}
.newtitle{font-size: 16px;color:red;text-align: center;margin: 15px 0}
.newp{font-size: 14px;color: #2222ff;display: flex;justify-content: space-around;}
</style>
