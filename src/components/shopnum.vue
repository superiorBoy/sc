<template>
    <div>
                <div class="mui-numbox" data-numbox-min='1' >
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="initcount"ref="numbox" @change='changeed' readonly>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>



    </div>
</template><script>

import mui from '../lib/mui/js/mui'
export default {
    data(){
        return{

        }
    },
    methods:{
   changeed(){
       console.log(this.$refs.numbox.value)
this.$store.commit('updatagoodscount',{

 id:this.goodsid,
 count:this.$refs.numbox.value

})


   }
    },
 mounted() {
       mui(".mui-numbox").numbox();
 },
 props:[
    'initcount','goodsid'
 ]

}
</script>
<style lang="scss" scoped>
.mui-numbox {
    width: 136px;
}
</style>
