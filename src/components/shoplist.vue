<template>
  <div>
    <router-link class="li" v-for="item in getshoplist" :key="item.id" :to="'/shouye/shopitem/'+item.id " tag="div">
               
           
                    <div class="list">
                    <img :src="item.img_url" />
                    <p class="list-title">{{item.title}}</p>

                    <div class="list-bottom">
                    <p class="jiage">
                        <span>￥{{item.sell_price}}</span>
                        <span class="yuanjia">￥{{item.market_price}}</span>
                    </p>
                    <p class="yunshu">
                        <span>热卖中</span>
                        <span>库存：{{item.stock_quantity}}</span>
                    </p>
                    </div>
                  
             </div></router-link>
   

    <button
      type="button"
      class="mui-btn mui-btn-primary mui-btn-outlined"
      @click="getmore"
      v-show="isShow"
    >加载更多</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pagenum: 1,
      getshoplist: [],
      isShow: true
    };
  },
  methods: {
    getshop() {
      this.$http.get("api/getgoods?pageindex=" + this.pagenum).then(result => {
        this.getshoplist = this.getshoplist.concat(result.body.message);

        if (result.body.message.length < 10) {
          this.isShow = !this.isShow;
        }
      });
    },
    getmore() {
      this.pagenum++;
      this.getshop();
    }
  },
  created() {
    this.getshop();
  }
};
</script>
<style lang="scss" scoped>
.li {
  width: 50%;
  float: left;
  font-size: 13px;
  box-sizing: border-box;
}

.list {
  border: solid 1px #f9f9f9;
  margin: 5px;
  border-radius: 3px;
  box-shadow: 0 2px 9px #666;
  p {
    margin-bottom: 0px;
  }

  img {
    width: 100%;
    height: 175px;
  }
  .list-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .list-bottom {
    background: #f0f0f0;

    .jiage {
      font-size: 15px;
      color: red;
      .yuanjia {
        text-decoration: line-through;
        font-size: 12px;
        color: #000;
        margin: 0 18px;
      }
    }
    .yunshu {
      display: flex;
      justify-content: space-between;
    }
  }
}

button {
  width: 100%;
  border-radius: 3px;
}
</style>

