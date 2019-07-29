<template>
    <div class="">
        <h3>{{tuwen.title}} </h3>
        <hr>
        <div v-html="tuwen.content" class="tuwen">

        </div>
 
    </div>
</template>
<script>
export default {
    data(){
        return{
tuwen:{}
        }
    },
    methods: {
        gettuwen(){
            this.$http.get('api/goods/getdesc/'+this.$route.params.id).then(result=>{


                this.tuwen=result.body.message[0]
            })
        }
    },
    created() {
        this.gettuwen()
    },
}
</script>
<style lang="scss" >
h3{font-size: 16px;text-align: center;color: #2222ff;margin: 15px 0;}
.tuwen{padding: 0 5px;}
.tuwen img{width: 100%;}
table{width: 100%;}
</style>
