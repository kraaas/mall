<template>
  <div>
    <div class="g-row fixStatusBar">
      <div class="m-profile">
        <div class="g-row">
          <div class="left">
            <img class="avatar" v-lazy="userInfo.avatar">
            <div class="info">
              <p class="nickname">{{userInfo.nickname}}</p>
              <div class="membershipLevel">
                <span class="memberTitle0">13312093473</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="g-row">
      <ul class="menu-list">
        <li class="menu-item">
          <router-link to="account">
            <i class="menu-icon iconfont icon-gouwuchetianjia"></i>
            <span class="txt">我的资料</span>
            <i class="menu-arrow iconfont icon-xiangyoujiantou"></i>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="orderList">
            <i class="menu-icon iconfont icon-gouwuchetianjia"></i>
            <span class="txt">我的订单</span>
            <i class="menu-arrow iconfont icon-xiangyoujiantou"></i>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="address">
            <i class="menu-icon iconfont icon-gouwuchetianjia"></i>
            <span class="txt">地址管理</span>
            <i class="menu-arrow iconfont icon-xiangyoujiantou"></i>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="updatePwd">
            <i class="menu-icon iconfont icon-gouwuchetianjia"></i>
            <span class="txt">修改密码</span>
            <i class="menu-arrow iconfont icon-xiangyoujiantou"></i>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="concat">
            <i class="menu-icon iconfont icon-gouwuchetianjia"></i>
            <span class="txt">联系我们</span>
            <i class="menu-arrow iconfont icon-xiangyoujiantou"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="g-row">
      <div class="w-button" @click="logout">退出登录</div>
    </div>
    <div class="logoutModal" v-if="showModal">
      <div class="logoutModal-layer">
        <div class="logoutModal-content" tabindex="-1">
          <div class="m-modal m-modal-confirm">
            <p class="txt">退出登录?</p>
            <div class="m-table btns">
              <div class="tr">
                <div class="td">
                  <a href="javascript:void(0);" class="w-btn" @click="logoutCancel">取消</a>
                </div>
                <div class="td">
                  <a href="javascript:void(0);" class="w-btn w-btn-1 nb" @click="logoutConfirm">确定</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as types from '../../vuex/mutation-types'
  import model from './MeModel'

  export default {
    data () {
      return {
        showModal: false,
        userInfo: {}
      }
    },
    async created () {
      this.userInfo = model
      this.$store.commit(types.CLICK_FOOT_ICON, 4)
    },
    methods: {
      logout () {
        this.showModal = true
      },
      logoutCancel () {
        this.showModal = false
      },
      logoutConfirm () {
        this.showModal = false
      }
    }
  }
</script>

<style scoped>
  .g-row {
    width: 750px;
    margin-right: auto;
    margin-left: auto;
  }
  .m-profile {
    height: 270px;
    background-color: #b5272d;
    background-size: 100%;
    padding: 0 30px;
    overflow: hidden;
  }
  .m-profile .g-row {
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
  }
  .m-profile .left {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-justify-content: flex-start;
    -moz-justify-content: flex-start;
    justify-content: flex-start;
    padding: 64px 0;
    width: 540px;
  }
  .m-profile .left .avatar {
    vertical-align: middle;
    width: 142px;
    height: 142px;
    border-radius: 50%;
  }
  .m-profile .left .info {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left: .4rem;
    line-height: 1;
    overflow: hidden;
  }
  .m-profile .left .info .nickname {
    color: #fff;
    font-size: 36px;
    line-height: 1.2;
    text-align: left;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .m-profile .left .info .membershipLevel span {
    color: #b4a078;
    font-size: 28px;
    vertical-align: middle;
  }
  .m-profile .left .info .membershipLevel span.memberTitle0 {
    color: #fff;
  }
  .w-button {
    vertical-align: middle;
    width: 90%;
    text-align: center;
    height: 80px;
    line-height: 80px;
    font-size: 28px;
    background-color: #fff;
    overflow: hidden;
    color: #333;
    border-radius: 6px;
    margin: 0 auto;

  }
  .logoutModal-layer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 19999;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .logoutModal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
  .m-modal {
    width: 600px;
    background: #fff;
    border-radius: 8px;/*no*/
    overflow: hidden;
  }
  .m-modal .txt {
    font-size: 32px;
    text-align: center;
    padding: 80px 0;
  }
  .m-modal .btns, .m-modal-list {
    border-top: 1px solid #d9d9d9;/*no*/
  }
  .m-table {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  .m-table .tr {
    display: table-row;
  }
  .m-table .td {
    display: table-cell;
    text-align: center;
  }
  .m-modal .w-btn {
    width: 100%;
    height: 104px;
    line-height: 104px;
    display: block;
    color: #333;
    font-size: 28px;
    text-align: center;
    border-right: 1px solid #d9d9d9;/*no*/
  }
  .m-modal .btns .nb {
    border-right: none;
  }
  .m-modal .w-btn-1 {
    color: #b4282d;
  }
  .menu-list {
    background-color: #fff;
    margin: 30px 0;
  }
  .menu-item {
    position: relative;
    height: 100px;
    line-height: 100px;
    border-bottom: 1px solid #f1f1f1;
  }
  .menu-item a {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    color: #333;
  }
  .menu-icon {
    font-size: 36px;
    padding-right: 10px;
  }
  .menu-arrow {
    position: absolute;
    right: 20px;
    font-size: 28px;
    color: #bfbcbc;
  }
</style>
