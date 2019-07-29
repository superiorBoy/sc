<template>
    <div>
<pinglun :id=this.$route.params.id></pinglun>
    </div>
</template>
<script>
import pinglun from './pinglun'
export default {
    data(){
        return{

        }
    },
    methods: {
        
    },
    components:{
        pinglun
    }
}
</script>
<style lang="scss" scoped>
.body{padding: 0 4px;}
</style>

