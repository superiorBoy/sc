<template>
    <div>
            <ul class="mui-table-view">


                    <li class="mui-table-view-cell mui-media" v-for='item in newlist'>
                        <router-link  :to="'/shouye/newitem?id='+item.id">
                            <img class="mui-media-object mui-pull-left" :src="item.img_url">
                            <div class="mui-media-body">
                               {{item.title}}
                                <p class='mui-ellipsis'><span class="time">{{item.add_time | dateFormat}}</span><span class="click">点击次数：{{item.click}}次</span></p>
                            </div>
                        </router-link>
                    </li>

    
                </ul>
    </div>
</template>
<script>
     import { Toast } from 'mint-ui';
export default {
    data(){
        return{
newlist:[]
        }
    },
    created() {
        this.getnewlist()
    },
    methods:{

getnewlist(){
    this.$http.get('api/getnewslist').then(reslute=>{

      console.log(reslute.body.message)

if(reslute.body.status==0){
       this.newlist=reslute.body.message
}else{
    Toast('加载失败');
}

        

    })
}

    }

}
</script>
<style scoped>
    .mui-media-body{font-size: 14px}
    .mui-ellipsis{font-size: 12px;display: flex;justify-content: space-between}

</style>