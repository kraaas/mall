<template>
  <div>
    <div class="m-cartHd fixStatusBar">
      <span class="logo">购物车</span>
    </div>
    <div class="has-data">
      <ul class="products">
        <li class="prod-item" v-for="i in 4">
          <check-box></check-box>
          <div class="img">
            <img src="http://yanxuan.nosdn.127.net/9f7ebc9b8b619de55a67f68aa1ddcfe3.png" alt="">
          </div>
          <div class="info">
            <p>荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机</p>
            <p class="type"> 土豪金 - 64g</p>
            <p class="count">
              <span class="number">数量：2</span>
              <span class="price">售价：145元</span>
            </p>
          </div>
          <div class="delete">
            <i class="iconfont icon-lajixiang"></i>
          </div>
        </li>
      </ul>
      <div class="footer">
          <div class="footer-price">总价: <span class="price">$123.34</span></div>
          <div class="footer-btn">立即结算</div>
      </div>
    </div>
    <div v-if="false" class="m-defaultPage m-defaultPage-noCart">
      <div class="container">
        <div class="img"></div>
        <div class="txt">购物车空空的，去逛逛吧</div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as types from '../../vuex/mutation-types'

  export default {
    data () {
      return {
        serviceList: [
          {
            title: '30天无忧退货'
          },
          {
            title: '48小时快速退款'
          },
          {
            title: '满88元免邮费'
          }
        ]
      }
    },
    async created () {
      this.$store.commit(types.CLICK_FOOT_ICON, 3)
    }
  }
</script>

<style scoped>
.prod-item {
  display: -ms-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 4vw 2vw;
  position: relative;
  height: 250px;
  border: 1px solid rgba(185, 185, 185, 0.14);
  background-color: #fff;
}
.prod-item .checkbox input{ 
  width: 30px;
  font-size: 24px;
  height: 30px;
  margin-left: 20px;
}
.prod-item .checkbox {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
}
.prod-item .img {
  flex: 2;
  overflow: hidden;
}
.prod-item .img img {
  width: 100%;
}
.prod-item .info {
  flex: 6;
  padding-left: 20px;
}
.prod-item .info p{
  color: #827e7e;
  line-height: 32px;
}
.prod-item .info .type {
  padding: 20px 0;
}
.prod-item .info .price {
  padding-left: 20px;
}
.delete {
  flex: 1;
  display: flex;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.m-cartHd {
  height: 88px;
  padding: 0 30px;
  line-height: 88px;
  text-align: center;
  background-color: #fff;
  position: relative;
}
.m-cartHd .logo {
  display: inline-block;
  font-size: 36px;
}
.m-cartHd .right {
  position: absolute;
  top: 0;
  right: 30px;
  font-size: 30px;
}
.m-cartHd:after {
  content: '';
  position: absolute;
  background-color: #d9d9d9;
  left: 0;
  width: 100%;
  height: 1px;
  -webkit-transform-origin: 50% 100% 0;
  transform-origin: 50% 100% 0;
  bottom: 0;
}
.m-defaultPage {
  top: 88px;
  z-index: 0;
  width: 100%;
  background-color: #f4f4f4;
  text-align: center;
}
.fixed, .m-defaultPage {
  position: fixed;
  left: 0;
  bottom: 0;
}
.m-defaultPage .container {
  position: absolute;
  top: -50px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 300px;
  margin: auto;
}
.m-defaultPage-noCart .img {
  background-image: url(../../assets/images/nullCart.png);
}
.m-defaultPage .img {
  display: inline-block;
  vertical-align: middle;
  width: 248px;
  height: 248px;
  margin-bottom: 8px;
  background-size: 248px 248px;
  background-position: center center;
  background-repeat: no-repeat;
}
.m-defaultPage .txt {
  font-size: 28px;
  line-height: 1;
  color: #999;
}
.footer {
    position: fixed;
    bottom: 100px;
    height: 99px;
    width: 100%;
    background-color: #fafafa;
    border-top: 1px solid #d6d6d6;
    display: flex;
    -moz-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    -ms-flex-pack: distribute;
    -webkit-justify-content: space-around;
    -moz-justify-content: space-around;
    justify-content: space-around;
}
.footer-price {
    flex: 1;
    padding-left: 20px;
}
.footer-price .price {
    color: #ce352d;
}
.footer-btn {
    flex: 1;
    height: 100%;
    line-height: 99px;
    text-align: center;
    color: #fff;
    background-color: #ec9334
}
</style>
