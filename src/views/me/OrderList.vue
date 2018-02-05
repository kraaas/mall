<template>
  <header-back :title="`我的订单(${orderList.length})`">
    <ul class="add-wrap" v-if="orderList.length">
      <li class="prod-item-wrap" v-for="(order, index) in orderList" :key="index">
        <router-link 
          class="prod-item" 
          :to="{name: 'detail', params: {id: item.detail.id}}"
          v-for="(item, innerIndex) in order.list"
          :key="innerIndex"
        >
            <div class="img">
              <img :src="item.detail.banners[0]" alt="">
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
        <div class="btns">
          <div class="btns-left">
            <span>{{order.orderDate}}</span>
          </div>
          <div class="btns-right">
            <mt-button @click="cancle" size="small" v-if="order.status === 0">
                取消订单
                <i slot="icon" class="iconfont icon-lajixiang"></i>
            </mt-button>
            <mt-button @click="viewExpress(order.express)" size="small" v-if="order.status === 1">
                查看物流信息
                <i slot="icon" class="iconfont icon-buoumaotubiao39"></i>
            </mt-button>
            <mt-button size="small" v-if="order.status === 2">
                订单已完成
                <i slot="icon" class="iconfont icon-checked"></i>
            </mt-button>
            <mt-button size="small" v-if="order.status === 3">
                订单已取消
                <i slot="icon" class="iconfont icon-error"></i>
            </mt-button>
          </div>
        </div>
      </li>
    </ul>
    <no-data v-if="!orderList.length" tip="您还没有订单哦"></no-data>
  </header-back>
</template>
<script>

// 0 下单成功
// 1 已发货
// 2 已完成
// 3 已取消
import { MessageBox, Toast } from 'mint-ui'

export default {
  data () {
    return {}
  },
  computed: {
    orderList() {
      return this.$store.state.order.list
    }
  },
  created() {
    const { dispatch } = this.$store
    dispatch('getOrderList')
  },
  methods: {
    cancle() {
      MessageBox.confirm('确定取消该订单?').then(action => {
        const { dispatch } = this.$store
        dispatch('cancelOrder').then(() => {
          dispatch('getOrderList')
        })
      })
    },
    viewExpress({ type, number }) {
      MessageBox({
        title: '物流信息',
        message: `${type}: ${number}`,
        showCancelButton: false
      })
    }
  }
}
</script>
<style scoped>
.add-wrap {
  padding-top: 1px;
}
.prod-item-wrap {
  margin: 0 auto;
  margin-top: 30px;
  width: 95%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 16px #e4e1e1;
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
.btns {
  display: flex;
  padding: 10px 20px 10px 10px;
  border-top: 1px solid #f1f1f1;
  background: #fff;
}
.switch {
  display: inline-block;
  transform: scale(.7);
  vertical-align: middle;
}
.btns-left {
  flex: 1;
  line-height: 66px;
  padding-left: 20px;
}
.btns-right {
  flex: 1;
  text-align: right;
}
.btns-right button {
  background: transparent;
  border: none;
  box-shadow: none;
  padding-right: 5px;
  font-size: 24px;
}
.footer {
  padding-top: 50px;
  text-align: center;
}
.footer button {
  width: 80%;
}
</style>
