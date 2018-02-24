<template>
  <div>
    <search-header />
    <div class="cateMenu">
      <div class="cateMenu-item" v-for="(cate, index) in cateList" :key="index">
        <router-link to="products">
          <div>
            <img v-lazy="cate.img">
          </div>
          <div>
            <span>{{cate.label}}</span>
          </div>
        </router-link>
      </div>
      <div class="cateMenu-item">
        <router-link to="sort">
          <div>
            <img v-lazy="">
          </div>
          <div>
            <span>更多</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="newGoods">
      <div class="newGoods-title">
        <span>今日特价</span>
      </div>
      <div class="newGoods-item">
        <swiper class="newGoods-swiper" :options="swiperOption">
          <swiper-slide 
            class="newGoods-slide" 
            v-for="(item, index) in hotList" 
            :key="index"
          >
            <router-link :to="{name: 'detail', params: {id: item.id}}" class="good">
              <div class="good-img"><img v-lazy="item.img"></div>
              <div class="good-name">{{item.title}}</div>
              <div class="good-price">
                <span>¥{{item.orderPrice}}</span>
                <!-- <span class="good-price-earn">赚:¥{{item.salePrice - item.orderPrice}}</span> -->
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="cate">
      <div class="cate-grid">
        <h3 class="title">新品推荐</h3>
        <div class="cate-goods">
          <product-list :list="newList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as types from '../../vuex/mutation-types'
  import model from './HomeModel'
  import SearchHeader from '../common/SearchHeader.vue'
  import ProductList from '../common/ProductList.vue'

  export default {
    data () {
      return {
        swiperOption: {
          slidesPerView: 2.5,
          spaceBetween: 10,
          setWrapperSize: true
        }
      }
    },
    computed: {
      hotList () {
        return this.$store.state.home.hotList
      },
      newList () {
        return this.$store.state.home.newList
      },
      cateList () {
        let list = this.$store.state.classify.list
        list = list.slice(0, 9)
        return list
      }
    },
    async created () {
      document.title = '移动端商城--首页'
      const { commit, dispatch } = this.$store
      dispatch('getClassifyList')
      dispatch('getHotList')
      dispatch('getNewList')
      commit(types.CLICK_FOOT_ICON, 0)
    },
    methods: {
    },
    components: {
      SearchHeader,
      ProductList
    }
  }
</script>

<style scoped>
  .banner {
    width: 100%;
    overflow: hidden;
  }
  .banner-swiper {
    height: 360px;
  }
  .banner-img img {
    width: 750px;
    height: 360px;
  }
  .cateMenu {
    background-color: #fff;
    overflow: hidden;
    margin: 20px 0;
    text-align: center;
  }
  .cateMenu-item {
    width: 20%;
    margin: 30px 0;
    float: left;
    display: block;
  }
  .cateMenu-item img {
    width: 54px;
    height: 54px;
  }
  .cateMenu-item span {
    color: #333;
    font-size: 24px;
    line-height: 28px;
  }
  .newGoods {
    margin-bottom: 20px;
    background-color: #fff;
  }
  .newGoods-title {
    line-height: 1.6rem;
    text-align: center;
    font-size: 0.373333rem;
    color: #333;
    background-color: #fff;
  }
  .newGoods-txt {
    display: block;
    text-align: center;
    font-size: 36px;
    color: #8BA0B6;
  }
  .newGoods-all {
    margin: 30px auto 0;
    width: 240px;
    height: 56px;
    font-size: 28px;
    line-height: 56px;
    background: #D8E5F1;
  }
  .arrow-right {
    background: url(../../assets/images/arrow-right.png);
    background-size: 10px 22px;
    display: inline-block;
    height: 22px;
    width: 10px;
    margin-left: 6px;;
  }
  .newGoods-item {
    width: 100%;
    height: 388px;
    overflow: hidden;
  }
  .newGoods-swiper {
    padding: 0 15px;
    overflow: visible;
  }
  .newGoods-slide {
    float: left;
    width: 280px;
  }
  .good-img {
    background-color: #f4f4f4;
    width: 280px;
    height: 280px;
  }
  .good img {
    width: 100%;
    height: 100%;
  }
  .good-name {
    margin: 15px 0;
    padding: 0 10px;
    font-size: 28px;
    line-height: 28px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #333;
  }
  .good-price {
    padding: 0 10px;
    font-size: 28px;
    line-height: 28px;
    text-align: left;
    color: #b4282d;
  }
  .cate {
    margin-bottom: 20px;
    background-color: #fff;
  }
  .cate-grid {
    background-color: #f4f4f4;
  }
  .cate-grid .title {
    line-height: 120px;
    text-align: center;
    font-size: 28px;
    color: #333;
    background-color: #fff;
  }
  .cate-goods {
    background-color: #fff;
  }
</style>
