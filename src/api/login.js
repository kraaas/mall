/**
 * Created by Administrator on 2017/8/16.
 */
import config from './config'
import http from './http'
const Login = {}

/**
 * 获取验证码
 * @returns {string}
 */
Login.captchaUrl = function () {
  return config.apiurl + '/captcha' + '?rand' + new Date().getTime()
}

/**
 * 校验验证码
 * @param params
 */
Login.checkCaptcha = function (params) {
  let url = config.apiurl + '/checkCaptcha'
  return http.request(url, 'post', params)
}

/**
 * 登录
 * @param params
 */
Login.doLogin = function (params) {
  let url = config.apiurl + '/login'
  return http.request(url, 'post', params)
}

Login.doLogout = function (params) {
  let url = config.apiurl + '/logout'
  return http.request(url, 'post', params)
}

Login.doRegist = function (params) {
  let url = config.apiurl + '/regist'
  return http.request(url, 'post', params)
}

export default Login
