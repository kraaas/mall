<template>
    <div class="detail">
      <swiper class="banner-swiper" :options="bannerSwiperOption">
        <swiper-slide class="banner-img" v-for="(banner, index) in banners" :key="index">
          <img v-lazy="banner.picUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="info">
          <h3 class="info-title">组件设计初衷就是要配合使用的</h3>
          <h3 class="info-price">$893</h3>
      </div>
      <div class="choose">
          <div class="property">
              <h3 class="property-title">尺寸</h3>
              <ul>
                  <li class="property-item">4公斤</li>
                  <li class="property-item">4公斤</li>
                  <li class="property-item">4公斤</li>
                  <li class="property-item">4公斤</li>
              </ul>
          </div>
          <div class="property">
              <h3 class="property-title">尺寸</h3>
              <ul>
                  <li class="property-item">4公斤</li>
                  <li class="property-item">4公斤</li>
                  <li class="property-item">4公斤</li>
                  <li class="property-item">4公斤</li>
              </ul>
          </div>
      </div>
      <div class="decs">
          <h3 class="decs-title">商品详情</h3>
          <div class="banner-img" v-for="(banner, index) in banners" :key="index">
            <img v-lazy="banner.picUrl" alt="">
        </div>
      </div>
      <div class="footer">
          <div class="footer-price">总价: <span class="price">$123.34</span></div>
          <div class="footer-btn">加入购物车</div>
      </div>
      <div class="back" @click="back">&lt;</div>
</div>
</template>

<script>
import model from '../home/HomeModel'
export default {
  data () {
    return {
      bannerSwiperOption: {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        setWrapperSize: true,
        updateOnImagesReady: true,
        autoplayDisableOnInteraction: false
      }
    }
  },
  async created () {
    this.banners = model.focusList
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  overflow: hidden;
}
.banner-swiper {
  height: 460px;
}
.banner-img img {
  width: 750px;
  height: 460px;
}
.info {
    background-color: #f3f3f3;
    border-bottom: 1px solid #d6d6d6;
}
.info-title {
    font-size: 30px;
}
.info-title{
    padding: 30px 20px;
}
.info-price {
    padding: 0 20px 20px;
    font-size: 28px;
    color: #ce352d;
}
.choose{
    padding-bottom: 30px;
    border-bottom: 1px solid #d6d6d6;
}
.property {
    padding: 0 20px;
}
.property-title {
    padding: 20px 0;
}
.property-item {
    display: inline-block;
    padding: 8px;
    border: 1px solid #bfbaba;
    border-radius: 4px;
    margin-right: 10px;
    font-size: 22px;
    color: #5a5959;
}
.decs-title {
    text-align: center;
    padding: 30px;
    background: #f3f3f3;
    border-bottom: 1px solid #d6d6d6;
}
.footer {
    position: fixed;
    bottom: 0;
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
.back {
    position: fixed;
    top: 20px;
    left: 20px;
    background-color: #5a5959;
    border-radius: 50%;
    text-align: center;
    width: 70px;
    height: 70px;
    line-height: 70px;
    opacity: .7;
    color: #FFF;
    z-index: 100;
}
</style>
