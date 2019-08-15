<template>
    <div>
       <h3>我的世界</h3>


<div class="title">
    <span  :class="show?isActive:''" @click="show=true">短信登录</span>
    <span  :class="!show?isActive:''" @click="show=false">密码登录</span>
</div>

<div :class="show?'aaa':xian">
<section class="yanzheng">
<input type="text"placeholder='请输入手机号'v-model='mobile'@input="getCode($event)"  >
<button type="button" class="mui-btn mui-btn-primary" @click='yanzheng' :disabled='dised' ref="yan">获取验证码</button>

</section>
<div class="center">
<input type="text"placeholder='输入验证码' class="ma"></div>


<div class="center">
    <button type="button" class="mui-btn mui-btn-primary" >登录</button>
    
    </div>
</div>
<div  :class="!show?'bbb':xian">

<form class="mima">
    <div class="mui-input-row">
        <label>用户名</label>
    <input type="text" class="mui-input-clear" placeholder="请输入用户名">
    </div>
    <div class="mui-input-row">
        <label>密码</label>
        <input type="password" class="mui-input-password" placeholder="请输入密码">
    </div>
    <div class="mui-button-row">
        <button type="button" class="mui-btn mui-btn-primary" >确认</button>
        <button type="button" class="mui-btn mui-btn-danger" >取消</button>
    </div>
</form>

</div>



    </div>
</template>
<script>
import mui from "../lib/mui/js/mui";

export default {
    data(){
        return{
            show:true,
            isActive:'on',
            xian:'xian',
            check:true,
            mobile:'',
            dised:true,
            time:3
        }
    },
    methods: {
        getCode() {
        if (this.mobile === '') {
            // this.$toast('请输入手机号');
          this.selected = true;
        } else {
          if (!/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(this.mobile)) {
            // this.$toast('手机号格式不正确')
          } else {

             this.dised=false
            // this.$toast('发送')

          }
        }
      },
      yanzheng(){

        this.dised=true

  var sss=  setInterval(()=>{
this.time--
 this.$refs.yan.innerText='已发送'+(this.time)
if(this.time==0){
    window.clearInterval(sss)
    this.$refs.yan.innerText='再次获取'
    this.time=3
    this.dised=false
}





},1000)



       




console.log(this.$refs.yan.innerText)


      }

    },
}
</script>
<style lang="scss" scoped>
    .on{color: red;}
    .xian{display: none}
    .aaa{ }
    h3{text-align: center;margin: 20px 0}
    .title{display: flex;justify-content: space-evenly;justify-items: center;}
    .yanzheng{
       width: 100%;
       display: flex;
margin: 20px 0;
justify-content: center;
align-items: center;

   
    }
    .yanzheng button{width: 30%;height: 40px;}
    input{width: 60%;margin: 0 ;padding: 0;}

    .bbb{padding: 0 7% ;margin: 20px 0;}
    .ma{width: 90%;margin: 0 auto}
    .center{text-align: center;margin-bottom: 20px}
    .center button{width: 90%;}
    .mima{border: 1px solid #eeeeee}
</style>