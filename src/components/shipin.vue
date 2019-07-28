<template>
    <div>

<textarea name="" id="" cols="30" rows="10" v-model="msg"></textarea>

<button @click="tijiao">tijao</button>

    </div>
</template>
<script>
export default {
    data(){
        return{
msg:'123'
        }
    },
 methods:{
 getshipin(){
     this.$http.jsonp('http://api.xjapi.club/API/theweather/?msg=上海').then(result=>{

console.log(result)

     })
 },
 tijiao(){
    
    this.getshipin()
 }
 },
 created(){

 }
   
}
</script>
