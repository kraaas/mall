<template>
    <div class="login">
        <div class="logo">LOGO</div>
        <form class="form">
            <div class="form-item">
                <i class="iconfont icon-wodejuhuasuan"></i>
                <input type="text" v-model="tel" placeholder="请输入手机号码">
            </div>
            <div class="form-item">
                <i class="iconfont icon-suo"></i>
                <input type="password" v-model="password" placeholder="请输入密码">
            </div>
            <div class="login-btn" @click="doLogin">立即登录</div>
        </form>
        <div class="regist">立即注册</div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
import api from 'api'
import * as types from '../../vuex/mutation-types'
export default {
  data () {
    return {
      tel: '',
      password: ''
    }
  },
  methods: {
    valid () {
      if(!this.tel || !this.password) {
          Toast('请填写正确信息')
          return false
      }
      return true
    },
    doLogin () {
      if(!this.valid()) return
      api.doLogin({
          tel: this.tel,
          password: this.password
      }).then(res => {
          const { redirect } = this.$route.query
          const { user } = res.data
          this.$store.commit(types.SET_USER, user)
          if(redirect) {
            this.$router.replace(redirect)
          }else {
            this.$router.replace('/home')
          }
      })
    }
  }
}
</script>
<style scoped>
.login {
    position: relative;
    height: 100vh;
    background-color: #fff;
}
.logo {
    height: 45vh;
    background-color: #f7f7f7;
    text-align: center;
    line-height: 45vh;
}
.form {
    padding: 50px;
    font-size: 28px;
}
.form-item {
    position: relative;
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: 10px;
    margin-bottom: 30px;
}
.form-item i {
    font-size: 32px;
    color: #b3b0b0;
    padding-right: 10px;
    position: absolute;
    top: 16px;
    left: 0;
}
.form-item input {
    height: 65px;
    width: 100%;
    font-size: 28px;
    padding: 10px;
    border: none;
    padding-left: 55px;
}
.login-btn {
    width: 100%;
    font-size: 28px;
    border: none;
    font-weight: normal;
    letter-spacing: 2px;
    text-align: center;
    line-height: 80px;
    height: 80px;
    background: #00a7ff;
    color: #fff;
    border-radius: 6px;
}
.regist {
    position: absolute;
    bottom: 50px;
    width: 100%;
    text-align: center;
}
</style>
