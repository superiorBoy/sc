<template>
    <div>
                <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max' >
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1"  @change="countchange" ref="numbox">
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
           countchange(){
              console.log(this.$refs.numbox.value)

this.$emit("getCount" , parseInt(this.$refs.numbox.value))



            }
    },
    props:['max'],
    watch: {
        'max':function(newVal,oldVal){

      mui(".mui-numbox").numbox().setOption('max',newVal)


        }
    },
}
</script>
<style lang="scss" scoped>
.mui-numbox {
    width: 136px;
}
</style>
