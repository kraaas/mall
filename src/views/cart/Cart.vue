<template>
  <div class="">
    <div class="m-cartHd fixStatusBar">
      <span class="logo">购物车</span>
    </div>
    <div v-if="cartList.length" class="has-data">
      <ul class="products marginTop">
        <li class="prod-item" v-for="(item, index) in cartList">
          <check-box :checked="item.checked" @change="toggleChecked(index)"></check-box>
          <router-link :to="{name: 'detail', params: {id: item.detail.id}}">
            <div class="img">
              <img :src="`http://api.gdsc198.com:8001/img/${item.detail.image_path[0]}`" alt="">
            </div>
            <div class="info">
              <p>{{item.detail.title}}</p>
              <p class="type">型号：{{item.selectedType.name}}</p>
              <p class="count">
                <span class="number">数量：{{item.count}}</span>
                <span class="price">总价：￥{{item.totalPrice.toFixed(2)}}</span>
              </p>
            </div>
          </router-link>
          <div class="delete" @click="remove(index)">
            <i class="iconfont icon-lajixiang"></i>
          </div>
        </li>
      </ul>
      <div class="footer">
          <div class="footer-price">总价: <span class="price">￥{{total.toFixed(2)}}</span></div>
          <div class="footer-btn" @click="buy">立即下单</div>
      </div>
    </div>
    <div v-else class="m-defaultPage m-defaultPage-noCart marginTop">
      <div class="container">
        <div class="img"></div>
        <div class="txt">购物车空空的，去逛逛吧</div>
      </div>
    </div>
    <select-address 
      :show="showAddress" 
      :onselect="selectAddress"
    ></select-address>
  </div>
</template>

<script>
  import * as types from '../../vuex/mutation-types'
  import { MessageBox, Toast } from 'mint-ui'

  export default {
    data () {
      return {
        addressId: null,
        showAddress: false,
      }
    },
    computed: {
      total () {
        return this.cartList.map(item => {
          return item.checked ? item.totalPrice : 0
        }).reduce((total, next) => {
          return total + next
        }, 0)
      },
      cartList () {
        return this.$store.state.car.list
      }
    },
    created () {
      this.$store.commit(types.CLICK_FOOT_ICON, 3)
    },
    methods: {
      remove(index) {
        MessageBox.confirm('确定从购物车中移除?').then(action => {
          const { commit } = this.$store
          commit('REMOVE_OUT_CAR', index)
        })
      },
      toggleChecked(index) {
        const { commit } = this.$store
        commit('TOGGLE_CHECKED', index)
      },
      buy() {
        this.showAddress = true
      },
      selectAddress (id) {
        this.showAddress = false
        this.addressId = id
        const { dispatch } = this.$store
        const items = this.cartList.filter(item => item.checked).map(order => {
          return {
              detail: order.detail._id,
              typeId: order.selectedType._id,
              count: order.count
            }
        })
        const order = {
            addressId: this.addressId,
            items,
            totalPrice: this.total
          } 
        
        if(items.length) {
          dispatch('buy', {order})
        } else {
          Toast({
              message: '请选择商品',
              iconClass: 'iconfont icon-error'
          })
        }
      }
    }
  }
</script>

<style scoped>
.products {
  padding-top: 88px;
}
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
.prod-item a {
  flex: 8;
  display: flex;
}
.prod-item .img {
  flex: 3;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
}
.prod-item .img img {
  width: 100%;
}
.prod-item .info {
  flex: 7;
  padding-left: 20px;
}
.prod-item .info p{
  color: #827e7e;
  line-height: 32px;
}
.prod-item .info .type {
  color: #ed9334;
  padding: 20px 0;
}
.prod-item .info .price {
  padding-left: 20px;
}
.prod-item .info .count {
  color: #ed9334;
}
.delete {
  flex: 1;
  display: flex;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: red;
}
.m-cartHd {
  position: fixed;
  top:0;
  width: 100%;
  left: 0;
  height: 88px;
  padding: 0 30px;
  line-height: 88px;
  text-align: center;
  background-color: #fff;
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
  padding-top: 88px;
  z-index: 0;
  width: 100%;
  background-color: #f4f4f4;
  text-align: center;
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
    background-color: #ce352d
}
</style>
