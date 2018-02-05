<template>
    <header-back :title="detail.title" class="detail" v-if="detail.title">
      <swiper class="banner-swiper" :options="bannerSwiperOption">
        <swiper-slide class="banner-img" v-for="(banner, index) in detail.banners" :key="index">
          <img v-lazy="banner" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="info">
          <h3 class="info-title">{{detail.title}}</h3>
          <h3 class="info-price">￥{{selectedType.price.toFixed(2)}}</h3>
      </div>
      <div class="choose">
          <div class="property">
              <h3 class="property-title">选择规格</h3>
              <ul>
                  <li 
                    :key="index"
                    class="property-item"
                    :class="{active: index === currentTypeIndex}"
                    v-for="(type, index) in detail.typeList" 
                    @click="changeType(index)"
                  >
                    {{type.name}}
                  </li>
              </ul>
          </div>
          <div class="property">
              <h3 class="property-title">数量</h3>
              <div class="count">
                <span class="count-btn reduce" @click="count > 1 ? --count : count">-</span>
                <input type="number" v-model="count" @change="changeCount">
                <span class="count-btn add" @click="++count">+</span>
              </div>
          </div>
      </div>
      <div class="decs">
          <h3 class="decs-title">商品详情</h3>
          <div class="banner-img" v-for="(img, index) in detail.images" :key="index">
            <img v-lazy="img" alt="商品图片">
        </div>
      </div>
      <div class="footer">
          <div class="footer-price">总价: <span class="price">￥{{totalPrice.toFixed(2)}}</span></div>
          <div class="footer-btn" @click="addToCar">加入购物车</div>
          <div class="footer-btn footer-btn-buy" @click="buy">立即下单</div>
      </div>
      <select-address 
        :show="showAddress" 
        :onselect="selectAddress"
      ></select-address>
    </header-back>
</template>

<script>
import model from '../home/HomeModel'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      addressId: null,
      showAddress: false,
      count: 1,
      currentTypeIndex: 0,
      bannerSwiperOption: {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        setWrapperSize: true,
        updateOnImagesReady: true,
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    totalPrice () {
      return this.count * this.selectedType.price
    },
    detail () {
      return this.$store.state.productDetail.detail
    },
    selectedType () {
      return this.detail.typeList[this.currentTypeIndex]
    },
    orderInfo () {
        const { selectedType, count, detail, totalPrice, addressId } = this
        return {
          selectedType,
          count,
          detail,
          totalPrice,
          checked: true,
          addressId
        }
    }
  },
  created () {
    const { dispatch } = this.$store
    const { id } = this.$route.params
    dispatch('getDetail', { id })
  },
  destroyed () {
    const { commit } = this.$store
    commit('CLEAR_DETAIL')
  },
  methods: {
    changeType (index) {
      this.currentTypeIndex = index
    },
    changeCount () {
      this.count = Math.max(this.count, 1)
    },
    addToCar () {
        const { commit } = this.$store
        commit('ADD_TO_CAR', this.orderInfo)
        Toast({
            message: '添加购物车成功',
            iconClass: 'iconfont icon-checked'
        })
    },
    buy () {
        this.showAddress = true
    },
    selectAddress(id) {
        this.showAddress = false
        this.addressId = id
        const { dispatch } = this.$store
        dispatch('buy', {params: [this.orderInfo], clearCart: false})
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
    padding: 30px 0;
}
.property-item {
    display: inline-block;
    padding: 10px 14px;
    border: 1px solid #bfbaba;
    border-radius: 4px;
    margin-right: 10px;
    font-size: 22px;
    color: #5a5959;
    margin-bottom: 15px;
}
.property-item.active {
    border-color:#ec9334;
    color: #ec9334;
}
.coun-btn {
    flex:1;
}
.count input {
    border: 1px solid #b9b5b5;
    border-radius: 4px;
    width: 80px;
    height: 40px;
    margin: 0 10px;
    vertical-align: middle;
    font-size: 28px;
    padding: 5px;
}
.count-btn {
    font-size: 36px;
    vertical-align: middle;
    padding: 10px;
    color: #757272;
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
    background-color: #ec9334;
}
.footer-btn-buy {
    background-color: #b4292d;
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
    opacity: .5;
    color: #FFF;
    z-index: 100;
}
</style>
