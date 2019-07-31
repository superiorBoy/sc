<template>
  <div class="body">
    <div class="mui-card"v-for="item in goodlist" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner" >

          <mt-switch></mt-switch>

          <img :src="item.thumb_path" alt />

          <div class="shanchu">
            <h3>{{item.title}}</h3>
            <p class="bottom">
              <span class="jia">￥{{item.sell_price}}</span>

              <shopnum class="shuzi"></shopnum>

              <span class="del">删除</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 价格结算 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner"></div>
      </div>
    </div>
  </div>
</template>
<script>
import shopnum from "./shopnum";
export default {
  data() {
    return {
      goodlist: []
    };
  },
  created() {
    this.getgoodlist();
  },

  methods: {
    // 获取store中所有商品，然后拼接出一个用逗号分隔的字符串
    getgoodlist() {
      var idarr = [];
      this.$store.state.car.forEach(item => {
        idarr.push(item.id);
      });
      //如果没有商品则直接返回，否则会报错
      if (idarr.length <= 0) {
        return;
      }

      this.$http
        .get("api/goods/getshopcarlist/" + idarr.join(","))
        .then(retult => {
          this.goodlist = retult.body.message;
        });
    }
  },
  components: {
    shopnum
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 60px;
  height: 60px;
  padding: 3px;
}
.mui-card-content-inner {
  display: flex;
  align-items: center;

  .shuzi {
    display: inline;
  }

  h3 {
    font-size: 13px;
    margin-bottom: 6px;
  }
}
.mui-card-content-inner {
  padding: 10px 5px;
}
.jia {
  color: red;
}
.del {
  color: #2222ff;
}
.body {
  background: #eeeeee;
  overflow: hidden;
}
.bottom{
    display: flex;
justify-content: space-evenly;
align-items: center;
width: 233px;
}
</style>

