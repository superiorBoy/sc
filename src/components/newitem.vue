<template>
    <div>

        <h3 class="newtitle">新闻标题</h3>

<p class="newp"><span class="time">发表时间：2019-08-12 18：55：55</span> <span class="click">点击次数：0次</span> </p>

<hr>
<div class="bodytext">

123456789


</div>











    </div>
</template>
<script>
export default {
    data(){
        return{
id:this.$route.query.id
        }
    },
    methods:{

    },
    mounted() {

console.log(this.$route.query.id)

},
created() {

},

}
</script>