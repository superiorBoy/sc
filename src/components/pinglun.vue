<template>
    <div class="body">
       
<p class="title">发表评论</p>
<hr>
<textarea placeholder="请输入要评论的内容（最多120字）" maxlength="120" v-model='pinglun'>

</textarea>
<button type="button" class="mui-btn mui-btn-primary" @click='fabiao'>发表评论</button>
<div v-for="(item,i) in pinglist" :key="">

<p class="pingtitle"> <span>第{{i+1}}楼</span>&nbsp;&nbsp;&nbsp; <span>用户：{{item.user_name}}</span>&nbsp;&nbsp; <span>发表时间:{{item.add_time |dateFormat}}</span></p>

<div class="pingboody">
{{item.content===''||item.content=="undefined"?'这个小垃圾啥都没有说':item.content}}
</div>
</div>

<button type="button" class="mui-btn mui-btn-primary mui-btn-outlined" @click='getmore'>加载更多</button>
    </div>
</template>


<script>
      import { Toast } from 'mint-ui';
export default {
    data(){
        return{
         
      pinglist:[],
      pageindex:1,
      pinglun:'',
      miid:this.id
        }
    },
    methods:{

getping(){
    this.$http.get("api/getcomments/" + this.miid+"?pageindex="+this.pageindex).then(result=>{
        console.log(result.body)
        if(result.body.status==0){
            this.pinglist=this.pinglist.concat(result.body.message)
        }else{
            Toast('加载失败');
        }
    })
},
getmore(){
    this.miid++;
    this.getping()
},
fabiao(){
   
if(this.pinglun==''){
  return  Toast('老铁，你评论呢？')
}



this.$http.post('api/postcomment/'+this.miid,{

content:this.pinglun

}).then(result=>{



if(result.body.status==0){
var cmt={
    user_name:'匿名用户',
    add_time:Date.now(),
    content:this.pinglun
}

this.pinglist.unshift(cmt);
this.pinglun='';

}else{
Toast('评论失败')
}
console.log(result)

})
    
}


    },
    created() {
        this.getping()
        
    }, 
    props:['id']

}
</script>






<style scoped>

.title{font-size: 16px;color: #000000;font-weight: 550;margin: 10px 0;}
textarea{height: 80px;font-size: 14px;margin-bottom: 0px}
.pingboody{font-size: 14px;text-indent:1.5em}
.pingtitle{font-size: 14px;margin-bottom: 0;background: #eeeeee}
button{width: 100%;margin: 10px 0;}
</style>