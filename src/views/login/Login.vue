<template>
    <div class="login">
        <div class="logo">
          <img src="../../assets/images/logosc.png" alt="">
        </div>
        <form class="form">
            <div class="form-item">
                <i class="iconfont icon-wodejuhuasuan"></i>
                <input type="text" v-model="tel" :placeholder="tips.tel">
            </div>
            <div class="form-item">
                <i class="iconfont icon-suo"></i>
                <input type="password" v-model="password" :placeholder="tips.pwd">
            </div>
            <div class="login-btn" @click="submit">立即{{tips.submit}}</div>
        </form>
        <div class="regist" @click="toggleMode">立即{{tips.btn}}</div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import api from "api";
import * as types from "../../vuex/mutation-types";
export default {
  data() {
    return {
      isLoginMode: true,
      tel: "",
      password: "",
      loginTips: {
        tel: '请输入手机号码',
        pwd: '请输入密码',
        submit: '登录',
        btn: '注册'
      },
      registTips: {
        tel: '手机号码作为登录账号',
        pwd: '请输入6-18位密码',
        submit: '注册',
        btn: '登录'
      }
    };
  },
  computed: {
    tips() {
      return this.isLoginMode ? this.loginTips : this.registTips
    }
  },
  methods: {
    toggleMode() {
      this.isLoginMode = !this.isLoginMode;
    },
    doLogin() {
      this.$store
        .dispatch("doLogin", {
          tel: this.tel,
          password: this.password
        })
        .then(res => {
          const { redirect } = this.$route.query;
            if(redirect) {
              this.$router.replace(redirect)
            }else {
              this.$router.replace('/home')
            }
        });
    },
    valid() {
      if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel))){
          Toast("请输入正确的手机号码");
         return false
      }
      if(!(/^[^\s]{4,18}$/.test(this.password))){
          Toast("请输入正确的4-18位的密码");
         return false
      }
      return true
    },
    doRegist() {
      if(this.valid()){
        this.$store
          .dispatch("doRegist", {
            tel: this.tel,
            password: this.password
          })
          .then(res => {
            Toast("注册成功，请登录");
            this.tel = ''
            this.password = ''
            this.isLoginMode = true
          });
      }
      
    },
    submit() {
      if (!this.valid()) return;
      this.isLoginMode ? this.doLogin() : this.doRegist();
    }
  }
};
</script>
<style scoped>
.login {
  position: relative;
  height: 100vh;
  background-color: #fff;
}
.logo {
  height: 45vh;
  background-color: #fff;
  text-align: center;
  line-height: 45vh;
}
.logo img {
  margin-top:130px;
  width: 50%;
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
  width: 100%;
  text-align: center;
  padding: 30px;
}
</style>
